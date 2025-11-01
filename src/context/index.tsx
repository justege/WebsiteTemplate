import { Provider as AuthProvider } from "./auth-token";
import { Provider as UserProvider } from "./application-user";
import { Provider as GraphQLProvider } from "./graphql";
import { Provider as PermissionsProvider } from "./permissions"
import { LoadingProvider as LoadingProvider } from "./isLoading"
import React from "react";
import { PopupProvider } from "./popupContext";

type AppProviderProps = { children: React.ReactNode };

function AppProvider({ children }: AppProviderProps) {
  return (
    <PopupProvider>
    <LoadingProvider>
    <AuthProvider>
      <GraphQLProvider>
        <UserProvider>
          <PermissionsProvider>
          {children}
          </PermissionsProvider>
          </UserProvider>
      </GraphQLProvider>
    </AuthProvider>
    </LoadingProvider>
    </PopupProvider>
  );
}

export default AppProvider;
