import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  WithGoogleSubmitButton,
  LoginSubmitButton,
  Label,
  OrText,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export const LoginForm = (props) => {
  const navigate = useNavigate();
  // const {s } = useContext(AccountContext);

  return (
    <BoxContainer>
      <Label>EMAIL</Label>
      <FormContainer>
        <Input type="email" placeholder="Email address" />
        <br />
        <Label>PASSWORD</Label>
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />

      <Marginer direction="vertical" margin="1.6em" />
      <LoginSubmitButton type="submit">Log In</LoginSubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <OrText>OR</OrText>
      <br />
      <WithGoogleSubmitButton type="submit">
        LOGIN WITH GOOGLE
      </WithGoogleSubmitButton>
      <Marginer direction="vertical" margin="1em" />

      <MutedLink>
        Don't have an account?{" "}
        <BoldLink
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
};
