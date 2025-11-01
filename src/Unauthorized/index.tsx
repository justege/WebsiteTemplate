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
import { LoadingScreen } from "../App";
import i18n from "../i18n";
import LandingPage from "./Components/LandingPage/Landingpage";


//const Login = React.lazy(() => import("../Unauthorized/Pages/Login"));

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
  const { user, loading } = useAuth();
  const { applicationUser } = useApplicationUserContext();

  if (loading) {
    return <LoadingScreen />; // Display the loading screen while loading is true
  }

  return (
    <LanguageRouteWrapper lang={lng || "tr"}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </LanguageRouteWrapper>
  );
};

export default App;
