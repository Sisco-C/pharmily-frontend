import React from "react";
import { AccountBox } from "../../components/accountBox/index.jsx";
import { LoginForm } from "../../components/accountBox/LoginForm.jsx";
import { SigninUI } from "./SigninUi";

const Signin = () => {
  return (
    <SigninUI>
      <div>
        <AccountBox />
      </div>
    </SigninUI>
  );
};

export default Signin;
