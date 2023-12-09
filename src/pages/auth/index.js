import React from "react";
import { SignUp } from "./components/signUp";
import { SignIn } from "./components/signIn";
import CardB from "../../assets/card.jpg";
import "./index.css";

export const Auth = ({ ...props }) => {
  return (
    <div className="auth">
        <img
            src={CardB}
            alt="Background"
            className="auth-bg"
        />
      <SignUp />
      <SignIn/>
    </div>
  );
};
