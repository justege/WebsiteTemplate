import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Provider as UrqlProvider } from "urql";
import { createUrqlClient } from "./urql";
import { useContext as useAuthTokenService } from "./auth-token";
import useFormatting from "./useFormatting";

export type LastErrorState = { errorId: string | null; state: string | null };

type GraphQLProviderProps = { children: React.ReactNode };

export const Provider: React.FC<GraphQLProviderProps> = ({ children }) => {
  const lastError = useRef<LastErrorState>({ errorId: null, state: null });

  const { formatDateTime } = useFormatting();
  const { t } = useTranslation();
  const { getToken } = useAuthTokenService();

  const ctx = createUrqlClient(
    getToken,
    t,
    formatDateTime,
    lastError,
    () => false
  );
  const context = React.useMemo(() => ctx, [ctx]);

  return <UrqlProvider value={context}>{children}</UrqlProvider>;
};
