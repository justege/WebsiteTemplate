import React from 'react';
import { ApplicationUserView, User, useWhoAmIQuery } from '../graphql/generated.do.not.touch';
import ApplicationUser from '../models/ApplicationUser';
import { useEffect, useMemo, useState } from 'react';
import _debounce from 'lodash.debounce';
import { useContext as useAuthTokenService } from './auth-token';
import { useLoadingContext } from './isLoading';

const LogoutAfter = 20 * 6000;
const WarnAfter = 15 * 6000;
const CheckValidityEvery = 500000;
let isTimerHot = false;
let timeoutWarningIssued = false;

localStorage.setItem('userLastActive', new Date().getTime().toString());

export function mapDTO(item?: Partial<ApplicationUserView> | null): ApplicationUser {
    if (!item) {
        return new ApplicationUser();
    }

    return new ApplicationUser({
        id: item.id,
        firstName: item.firstName ?? "",
        lastName: item.lastName ?? "",
        applicationRoleNames: item.applicationRoleNames || [],
        email: item.email,
    });
}

type State = {
  applicationUser: ApplicationUser;
  hasFetched: boolean | null;
  isAuthorized: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const Context = React.createContext<State | undefined>(undefined);
Context.displayName = 'ApplicationUserContext';

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

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { getToken, isAuthenticated, login, logout } = useAuthTokenService();
  const [fetchUserData, setFetchUserData] = useState(false);
  const [isWarningDialogOpen, setWarningDialogOpen] = useState(false);
  const { setLoading } = useLoadingContext();

  const [res] = useWhoAmIQuery({
    pause: !fetchUserData && !isAuthenticated,
  });


  const [applicationUserState, setApplicationUserState] = useState<State>({
    applicationUser: mapDTO(null),
    isAuthorized: false,
    hasFetched: null,
    login,
    logout,
  });
  React.useEffect(() => {
    if (isAuthenticated) {
      setLoading(true)
      setFetchUserData(true);
    }
  }, [isAuthenticated]);

  React.useEffect(()=> {

    if (res.data?.whoAmI){
      setApplicationUserState((state)=> ({
        ...state,
        hasFetched: true,
        applicationUser: mapDTO(res.data?.whoAmI),
        isAuthorized: (res.data?.whoAmI?.applicationRoleNames.length ?? 0) > 0,
      }))
    } 

    if (res.data?.whoAmI == null && fetchUserData){
      setApplicationUserState((state)=> ({
        ...state,
        hasFetched: true,
      }))
    } 

  },[res.data?.whoAmI, isAuthenticated])

  const checkTimeout = useMemo(
    () => () => {
      const currentTime = new Date().getTime();
      const userLastActive = parseInt(localStorage.getItem('userLastActive') ?? currentTime.toString());

      const inactiveSinceSeconds = Math.round((currentTime - userLastActive) / 1000);
      const isInIframe = window.parent !== window;

      // console.log('ApplicationUserTimeout - checkTimeout', {
      //   isAuthenticated,
      //   inactiveSinceSeconds,
      //   isInIframe,
      //   WarnAfter,
      //   timeoutWarningIssued,
      // });

      if (!isAuthenticated || isInIframe) {
        // if we do not have a valid session
        // or this code is run in an iframe - otherwise the token-refresh would trigger multiple inactivity counters
        // console.log('checkSessionExpiration - return due to missing user session or iFrame'); // eslint-disable-line
        return;
      }

      if (inactiveSinceSeconds < WarnAfter) {
        // keep the token from expiring as long as we did not exceed the warn/hard limit
        getToken();
      }

      if (inactiveSinceSeconds >= LogoutAfter) {
        // we are past our timeout limit
        logout();
        
      }

      if (inactiveSinceSeconds >= WarnAfter && !timeoutWarningIssued) {
        // we are getting close to timeout
        setWarningDialogOpen(true);
        timeoutWarningIssued = true; // disable to prevent multiple warnings
      }
    },
    [getToken, isAuthenticated, logout],
  );

  const resetInactivity = useMemo(
    () => () => {
      // console.log('ApplicationUserTimeout - resetInactivity');
      localStorage.setItem('userLastActive', new Date().getTime().toString());

      if (!isTimerHot) {
        isTimerHot = true;
        setInterval(() => checkTimeout(), CheckValidityEvery);
      }
    },
    [checkTimeout],
  );

  const debouncedResetInactivity = useMemo(
    () => _debounce(() => resetInactivity(), 1500, { leading: true }),
    [resetInactivity],
  );

  useEffect(() => {
    // watch for clicks
    document.removeEventListener('click', debouncedResetInactivity, true);
    document.addEventListener('click', debouncedResetInactivity, true);

    // watch for input modification events
    document.removeEventListener('beforeinput', debouncedResetInactivity, true);
    document.addEventListener('beforeinput', debouncedResetInactivity, true);

    debouncedResetInactivity();

    return () => document.removeEventListener('click', debouncedResetInactivity, true);
  }, [debouncedResetInactivity]);

  const onCloseWarningDialog = () => {
    timeoutWarningIssued = false;
    setWarningDialogOpen(false);
    resetInactivity();
  };


  return (
    <>
      <Context.Provider value={applicationUserState}>{children}</Context.Provider>
    </>
  );
};
