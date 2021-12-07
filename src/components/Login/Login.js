import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle, signInWithGithub } = useAuth();

  return (
    <div>
      <h1>Please login</h1>
      <button style={{ marginRight: "15px" }} onClick={signInWithGoogle}>
        Login with Google
      </button>
      <button style={{ marginRight: "15px" }} onClick={signInWithGithub}>
        Login with Github
      </button>
      <br />
      <br />
      <Link to="/register">New User ?</Link>
    </div>
  );
};

export default Login;
