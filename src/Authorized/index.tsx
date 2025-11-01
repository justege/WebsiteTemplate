import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import { useContext as useAuth } from "../context/auth-token";
import { useContext as useApplicationUserContext } from "../context/application-user";
import { useContext as usePermisionsContext } from "../context/permissions";
import i18n from "../i18n";
import { LoadingScreen } from "../App";
import LandingPage from "../Unauthorized/Components/LandingPage/Landingpage";


interface AuthenticatedRouteProps {
  children: JSX.Element;
}

const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({
  children,
}) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />; // Display the loading screen while loading is true
  }

  return user ? children : <Navigate to="/login" />;
};

interface LanguageRouteWrapperProps {
  children: JSX.Element;
  lang: string;
}

const LanguageRouteWrapper: React.FC<LanguageRouteWrapperProps> = ({
  children,
  lang,
}) => {
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return children;
};

const App: React.FC = () => {
  const { loading } = useAuth();
  const { applicationUser } = useApplicationUserContext();
  const { ApplicationPermissions, hasAppPermission } = usePermisionsContext();

  const hasAdminPermission = hasAppPermission(
    ApplicationPermissions.canAccessAdminView
  );
  const hasClientPermission = hasAppPermission(
    ApplicationPermissions.canAccessClientView
  );

  if (loading) {
    return <LoadingScreen />; // Display the loading screen while loading is true
  }

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<Navigate to="/tr" />} />
        <Route path="/:lng/*" element={<LanguageRoute />} />
      </Routes>
    </Suspense>
  );
};

const LanguageRoute: React.FC = () => {
  const { lng } = useParams<{ lng: string }>();
  const { applicationUser } = useApplicationUserContext();

  return (
    <LanguageRouteWrapper lang={lng || "tr"}>
      <Routes>
        <Route path="/" element={<LandingPage />} />


      </Routes>
    </LanguageRouteWrapper>
  );
};

export default App;
