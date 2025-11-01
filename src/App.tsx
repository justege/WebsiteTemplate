import React, { Suspense } from "react";
import { useContext as useApplicationUserContext } from "./context/application-user";
import { useLoadingContext } from "./context/isLoading";
import { Spinner, Box, Text, Flex, Portal } from "@chakra-ui/react";

const AuthorizedApp = React.lazy(() => import("./Authorized"));
const UnauthorizedApp = React.lazy(() => import("./Unauthorized"));


export const LoadingScreen: React.FC = () => {

  return (
    <Portal>
      <Flex
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
        justify="center"
        align="center"
        zIndex={2}
      >
        <Box textAlign="center">
          <Spinner />
        </Box>
      </Flex>
    </Portal>
  );
};

function App() {
  const { isAuthorized, applicationUser } = useApplicationUserContext();
  const { isLoading } = useLoadingContext();

  const RenderedComponent = isAuthorized ? AuthorizedApp : UnauthorizedApp;

  return (
    <Suspense fallback={<LoadingScreen />}>
      <RenderedComponent />
    </Suspense>
  );
}

export default App;
