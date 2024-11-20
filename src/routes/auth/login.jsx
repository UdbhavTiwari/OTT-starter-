import { Button, Card, CardBody, Input } from "@nextui-org/react";
import React from "react";
import { useAuth } from "../../providers/AuthProvider/hooks";

export const Login = () => {
  const { login } = useAuth();
  const [error, setError] = React.useState(null);
  const [loginCreds, setLoginCreds] = React.useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    const response = login(loginCreds.email, loginCreds.password);
    if (response) {
      setError(response);
    }
  };

  return (
    <div>
      {error && (
        <Card>
          <CardBody>
            <p>{error.message}.</p>
          </CardBody>
        </Card>
      )}

      <Input
        label="Email"
        size="sm"
        variant="bordered"
        name="email"
        onChange={(e) =>
          setLoginCreds((prevState) => ({
            ...prevState,
            email: e.target.value,
          }))
        }
      />
      <Input
        label="Password"
        size="sm"
        variant="bordered"
        type="password"
        name="password"
        onChange={(e) =>
          setLoginCreds((prevState) => ({
            ...prevState,
            password: e.target.value,
          }))
        }
      />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};
