import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="login">
      <h1>Please Register</h1>
      <form>
        <label htmlFor="email">Email : </label>
        <input type="email" name="email" />
        <br />
        <br />
        <label htmlFor="password">Password : </label>
        <input type="password" name="password" />
        <br />
        <br />
        <input type="submit" value="Register" />
      </form>
      <br />
      <Link to="/login">Already Registered ?</Link>
    </div>
  );
};

export default Register;
