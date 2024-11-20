import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { createDatabase, database } from "./utils/faker-db-generation";
import { AppProvider } from "./providers/AppProvider";
import { AuthProvider } from "./providers/AuthProvider";

const router = createBrowserRouter(routes);
createDatabase();
function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
