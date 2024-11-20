import React from "react";
import { useUsers } from "../AppProvider/hooks";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = React.useState(null);
  const navigate = useNavigate();
  const users = useUsers();

  const login = React.useCallback((email, password) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setAuthUser(user);
      navigate("/browser");
      return;
    }

    return {
      statusCode: 404,
      message: "Invalid login credentials",
    };
  }, []);

  const logout = React.useCallback(() => {
    setAuthUser(null);
  }, []);

  const contextValue = React.useMemo(
    () => ({
      authUser,
      login,
      logout,
    }),
    [authUser, login, logout]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
