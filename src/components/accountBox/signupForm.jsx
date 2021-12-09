import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SignUpSubmitButton,
  Label
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
      <Label>EMAIL</Label>
        <Input type="email" placeholder="Email address" />
        <br/>
        <Label>PASSWORD</Label>
        <Input type="password" placeholder="Password" />
        <br/>
        <Label>RE-ENTER PASSWORD</Label>
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <br/>
      <Marginer direction="vertical" margin={10} />
      <SignUpSubmitButton type="submit">Sign up</SignUpSubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Log in
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
