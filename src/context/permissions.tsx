import React from 'react';
import ApplicationUser from './userModel';
import { useContext as useApplicationUserContext } from './application-user';

export enum ApplicationRoles {
  CLIENTUSER = 'applicationRole.user',
  PROFESSIONAL = 'applicationRole.professional',
  SUPERADMIN = 'applicationRole.superAdmin',
}

export const ApplicationRolesGeneral = [
  ApplicationRoles.CLIENTUSER,
];

export const ApplicationRolesAdminArea = [
    ApplicationRoles.PROFESSIONAL,
    ApplicationRoles.SUPERADMIN
];

enum ApplicationPermissions {
    canAccessAdminView,
    canAccessClientView,
    canAccessSuperAdminView
}

const AppPermissionToRoles: { [key in ApplicationPermissions]: Array<string> } = {
  [ApplicationPermissions.canAccessSuperAdminView]: [ApplicationRoles.SUPERADMIN],
[ApplicationPermissions.canAccessAdminView]: [ApplicationRoles.PROFESSIONAL],
  [ApplicationPermissions.canAccessClientView]: [
   ApplicationRoles.CLIENTUSER,
  ],
};

interface ClientAuthorization {
  applicationRole: { name: string };
  authorizedTo: { id: string };
}

export interface AreaAdminAuthorization {
  workflowRole: { name: string };
  authorizedToId: string;
}

function usePermissions(user: ApplicationUser) {
  const { id: userId, applicationRoleNames: userApplicationRoles } = user;

  const extractRoleFromClientAuthorizations = (authorizations?: Array<ClientAuthorization>) => {
    const userAuthorization = authorizations?.find((item) => item.authorizedTo.id === userId);
    return userAuthorization?.applicationRole?.name;
  };

  const extractRoleFromAreaAdminAuthorizations = (authorizations?: Array<AreaAdminAuthorization>) => {
    const userAuthorization = authorizations?.find((item) => item.authorizedToId === userId);
    return userAuthorization?.workflowRole?.name;
  };

  function hasAppPermission(key: ApplicationPermissions) {
    let result = false;

    userApplicationRoles.forEach((role: any) => {
      if (AppPermissionToRoles[key].includes(role)) {
        result = true;
      }
    });

    return result;
  }

  function isAllowedTo(key: ApplicationPermissions, role?: string) {
    if (role === undefined) {
      return false;
    }

    return AppPermissionToRoles[key].includes(role);
  }


  return {
    ApplicationRoles,
    ApplicationPermissions,
    extractRoleFromAreaAdminAuthorizations,
    extractRoleFromClientAuthorizations,
    hasAppPermission,
    isAllowedTo,
  };
}

type UsePermissionsReturn = ReturnType<typeof usePermissions>;

const Context = React.createContext<UsePermissionsReturn | undefined>(undefined);
Context.displayName = 'PermissionsContext';

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

import { ReactNode } from 'react';

export const Provider: React.FC<{ children: ReactNode }> = (props) => {
  const { applicationUser } = useApplicationUserContext();
  const ctx = usePermissions(applicationUser);
  const context = React.useMemo(() => ctx, [ctx]);

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};
