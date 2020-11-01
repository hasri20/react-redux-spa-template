import React from "react";

const LoginPage = ({ loginUser }) => {
  const handleLogin = () => {
    loginUser("adit", "token");
  };

  return (
    <div>
      <p>You must log in to view the page at </p>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default LoginPage;
