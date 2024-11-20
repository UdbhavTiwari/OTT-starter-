import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider/hooks";
import React from "react";

export const ProtectedRoute = ({ children }) => {
  const { authUser } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!authUser) navigate("/auth/login");
  }, []);

  return children;
};
