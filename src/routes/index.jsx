import { ProtectedRoute } from "../components/ProtectedRoute";
import { AccountLayout } from "../layouts/accounts-layout/AccountLayout";
import { RootLayout } from "../layouts/root-layout/RootLayout";
import { ViewerLayout } from "../layouts/viewer-layout/ViewerLayout";
import { AccountInformation } from "./accounts/AccountInformation";
import { ManageProfiles } from "./profiles/ManageProfiles";
import { Movies } from "./viewers/Movies";
import { ViewerHome } from "./viewers/ViewerHome";
import { Login } from "./auth/login";
import { AuthProvider } from "../providers/AuthProvider";

const routes = [
  {
    path: "/",
    element: (
      <AuthProvider>
        <RootLayout />
      </AuthProvider>
    ),
    children: [
      {
        path: "accounts",
        element: <AccountLayout />,
        children: [{ index: true, element: <AccountInformation /> }],
      },
      {
        path: "auth/login",
        element: <Login />,
      },
      {
        path: "browser",
        element: (
          <ProtectedRoute>
            <ViewerLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <ViewerHome />,
          },
          { path: "movies", element: <Movies /> },
        ],
      },
      {
        path: "profiles",
        element: <ManageProfiles />,
      },
    ],
  },
];

export { routes };
