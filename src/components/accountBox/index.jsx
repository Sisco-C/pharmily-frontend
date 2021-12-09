import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./LoginForm.jsx";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./SignupForm";
import "../../App.css";
import logo from "../../images/new-logo.png";
import { useLocation, useNavigate } from "react-router-dom";

const BoxContainer = styled.div`
  width: 380px;
  min-height: 703px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  border-radius: 19px;
  background-color: rgba(255, 255, 255, 1);
  // box-shadow: rgba(255, 255, 255, 1);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 50%;
  height: 50px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -350px;
  left: -70px;
  background: rgba(255, 255, 255, 1);
  background: linear-gradient(
    58deg,
    rgba(255, 255, 255, 1) 20%,
    rgba(255, 255, 255, 1) 100%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  color: #fff;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.3px;

  /* grayscale / black */

  color: #252733;
`;

const SmallText = styled.h5`
  color: #fff;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  text-align: center;
  letter-spacing: 0.3px;

  /* grayscale / gray */

  color: #9fa2b4;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  const location = useLocation();
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState(location.pathname.split("/")[1]);
  const navigate = useNavigate();

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      navigate("/signup");
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      navigate("/signin");
      setActive("signin");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };
  console.log("props--", active);

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          {/* <img src="../src/images/new-logo.jpg"/> */}

          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />

          {(!active || active === "signin") && (
            <HeaderContainer>
              <HeaderText>
                <img src={logo} alt="Our New Logo" />
              </HeaderText>
              <HeaderText>Welcome to Pharmily + </HeaderText>
              <SmallText>Enter your email and password below</SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>
                {" "}
                <img src={logo} alt="Our New Logo" />
              </HeaderText>
              <HeaderText>Welcome to Pharmily + </HeaderText>
              <SmallText>Enter your email and password below</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {(!active || active === "signin") && <LoginForm />}
          {active === "signup" && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
