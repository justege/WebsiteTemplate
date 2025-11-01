import axios, { AxiosRequestConfig, AxiosResponse, CancelTokenSource } from 'axios';
import React, { useRef, useState } from 'react';
import {
  DialogRoot,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  Button,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useContext as useAuthTokenService } from './auth-token';
import dayjs from 'dayjs';
import useFormatting from './useFormatting';

type HealthCheckApiResponse = {
  status: string;
  totalDuration: string;
  entries: { [key: string]: { data: any; duration: string; status: string; tags: Array<string> } };
};

type VersionResponse = {
  version: string;
  build: string;
  environment: string;
  hash: string;
};

type LastErrorState = { errorId: string | null; state: string | null };

const ApiUrl = 'https://automatelio-api-small-paper-2188.fly.dev/graphql/';

function useAxios() {
  const { t } = useTranslation();
  const { getToken } = useAuthTokenService();

  const axiosInstance = axios.create({
    baseURL: ApiUrl,
    headers: {
      Accept: 'application/json',
    },
  });
  const { formatDateTime } = useFormatting();
  const lastError = useRef<LastErrorState>({ errorId: null, state: null });
  const [progress, setProgress] = useState(0);
  const [isDownloading, setDownloading] = useState(false);
  const [cancelTokenSource, setCancelTokenSource] = useState<CancelTokenSource | undefined>(undefined);

  axiosInstance.interceptors.request.use(async (config) => {
    const theRequest : any = config;
    const token = await getToken();

    if (token) {
      theRequest.headers = {
        ...theRequest.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    return theRequest;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (axios.isCancel(error)) {
        return;
      }

      let errorMsg = error.message;

      if (error?.response?.data?.message) {
        errorMsg = error?.response?.data?.message;
      }

      const errorMsgWithTimestamp = `${formatDateTime(dayjs().toJSON())}: ${errorMsg}`;


    },
  );

  async function getHealthCheck() {
    return (await axiosInstance.get<HealthCheckApiResponse>('/hc')).data;
  }

  async function getFrontEndVersion() {
    const versionURI = `${import.meta.env.BASE_URL}version.json`;
    return (await axios.get<VersionResponse>(versionURI)).data;
  }

  async function getBackEndVersion() {
    const versionURI = '/version.json';
    return (await axiosInstance.get<VersionResponse>(versionURI)).data;
  }

  function uploadAuditFile(
    auditId: number,
    areaId: number,
    file?: File | null,
    onUploadProgress?: ((progressEvent: any) => void) | undefined,
  ) {
    if (!file) {
      return;
    }

    const formData = new FormData();

    formData.append('file', file);
    formData.append('auditId', auditId.toString());
    formData.append('areaId', areaId.toString());

    return axiosInstance.post('files', formData, { onUploadProgress });
  }

  function deleteAuditFile(itemId: number) {
    return axiosInstance.delete(`files/${itemId}`);
  }

  function processAxiosDownloadResponse(response: AxiosResponse<any>, fileName: string) {
    if (!response) {
      return;
    }

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function downloadAuditFile(itemId: number, fileName: string) {
    const cancelToken = axios.CancelToken.source();

    setCancelTokenSource(cancelToken);
    setDownloading(true);

    axiosInstance
      .get(`files/${itemId}`, {
        cancelToken: cancelToken.token,
        onDownloadProgress: (data: any) => setProgress(data?.total > 0 ? Math.floor((100 * data?.loaded) / data?.total) : 0),
        responseType: 'blob',
      })
      .then((response) => processAxiosDownloadResponse(response, fileName))
      .finally(() => {
        setDownloading(false);
        setProgress(0);
      });
  }
  async function downloadAuditFileDirect(itemId: number, options?: AxiosRequestConfig, onSuccessCallback?: () => void) {
    const response = await axiosInstance.get<string>(`files/getDownloadUrl/${itemId}`, options);

    if (!response || !response.data || response.data === '') {
      return;
    }

    if (response.data.length > 5 && response.data.startsWith('data:')) {
      // simulation mode engaged
      const win = window.open();
      const data = response.data;
      win?.document.write(
        `<iframe src="${data}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`,
      );
      return;
    }

    const link = document.createElement('a');
    link.href = response.data;
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (onSuccessCallback) {
      onSuccessCallback();
    }
  }

  function downloadLogFile(fileName: string) {
    const cancelToken = axios.CancelToken.source();

    setCancelTokenSource(cancelToken);
    setDownloading(true);

    axiosInstance
      .get(`files/log?fileName=${fileName}`, { responseType: 'blob' })
      .then((response) => processAxiosDownloadResponse(response, fileName))
      .finally(() => {
        setDownloading(false);
        setProgress(0);
      });
  }
  async function editAuditFile(itemId: number, options?: AxiosRequestConfig) {
    const response = await axiosInstance.get<string>(`files/getEditUrl/${itemId}`, options);

    if (!response || !response.data || response.data === '') {
      return;
    }

    if (response.data.length > 5 && response.data.startsWith('data:')) {
      // simulation mode engaged
      const win = window.open();
      const data = response.data;
      win?.document.write(
        `<iframe src="${data}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`,
      );
      return;
    }

    const link = document.createElement('a');
    link.href = response.data;
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
  }

  return {
    axiosInstance,
    cancelTokenSource,
    deleteAuditFile,
    downloadAuditFile,
    downloadAuditFileDirect,
    downloadLogFile,
    editAuditFile,
    getBackEndVersion,
    getCancelTokenSource: () => axios.CancelToken.source(),
    getFrontEndVersion,
    getHealthCheck,
    isDownloading,
    progress,
    uploadAuditFile,
  };
}

type UseAxiosReturn = ReturnType<typeof useAxios>;

const Context = React.createContext<UseAxiosReturn | undefined>(undefined);
Context.displayName = 'RestServiceContext';

export const useContext = () => {
  const context = React.useContext(Context);

  if (!context) {
    const error = new Error(`[${Context.displayName}] is null or undefined`);
    error.name = 'ContextError';
    Error.captureStackTrace?.(error, useContext);
    throw error;
  }

  return context;
};

export const Provider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const { t } = useTranslation();

  const ctx = useAxios();
  const context = React.useMemo(() => ctx, [ctx]);
  const alertCancelRef = React.useRef(null);

  const title = t('general.downloadDialog.title');
  const body = t('general.downloadDialog.msg', { percent: ctx.progress });

  const onCancel = () => ctx.cancelTokenSource?.cancel();

  return (
    <>
      <DialogRoot open={ctx.isDownloading} onOpenChange={onCancel}>
        <DialogContent w='400px' maxW='400px' p={6}>
          <DialogHeader>{title}</DialogHeader>

          <DialogBody p={0} mt={2} color='dt.grey.500' textStyle='12/16'>
            {body}
          </DialogBody>

          <DialogFooter p={0} mt={2}>
            <Button id={`download-alert--cancel`} variant='outline' ref={alertCancelRef} onClick={onCancel}>
              {t('general.buttons.cancel')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
      <Context.Provider value={context}>{children}</Context.Provider>
    </>
  );
};
