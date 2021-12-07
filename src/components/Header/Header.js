import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div style={{ position: "relative" }} className="header">
      <Link to="/home">Home</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/placeorder">Place Order</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <img
        width="30px"
        style={{ borderRadius: "50%", position: "absolute", right: "39%" }}
        src={user.photoURL}
        alt=""
      />
      {/* <span>{user.displayName} </span> */}
      {user?.displayName && (
        <button
          style={{
            color: "blue",
            marginLeft: "40px",
            border: "3px solid gray",
            borderRadius: "5px",
            backgroundColor: "transparent",
            padding: "8px",
          }}
          onClick={logOut}
        >
          Log out
        </button>
      )}
    </div>
  );
};

export default Header;
