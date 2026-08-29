import React, { useState } from "react";
import Signup from "./Signup";
import Login from "../login/Login";
import "./Auth.css";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="auth-wrapper">
      {showLogin ? <Login /> : <Signup />}

      <p className="auth-toggle-text">
        {showLogin ? (
          <>
            Don't have an account?{" "}
            <span onClick={() => setShowLogin(false)}>Sign up</span>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <span onClick={() => setShowLogin(true)}>Login</span>
          </>
        )}
      </p>
    </div>
  );
};

export default Auth;