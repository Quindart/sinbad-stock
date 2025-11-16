import { AuthProvider, useAuth } from './auth';
import { RouterProvider } from '@tanstack/react-router';
import router from './route';

function InnerApp() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />;
}
function App() {
  return (
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  );
}

export default App;
