import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.button`
  color: rgba(159, 162, 180, 1);
  text-decoration: none;
  //styleName: Reg 14 (0.3 px);
  font-family: Mulish;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.30000001192092896px;
  text-align: center;
  cursor: pointer;
`;
export const OrText = styled.a`
   color: background: rgba(0, 0, 0, 1);
  text-decoration: none;
  //styleName: Reg 14 (0.3 px);
font-weight: 400;
line-height: 20px;
letter-spacing: 0.30000001192092896px;
text-align: center;
font-family: Nunito;
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 16px;
letter-spacing: 0em;


`;

export const BoldLink = styled.button`
  //styleName: Semibold 14 (0.2 px);
  font-family: Mulish;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.20000000298023224px;
  text-align: center;
  // background: rgba(55, 81, 255, 1);
  height: 20px;
  width: 51px;
  left: 0px;
  top: 0px;
  border-radius: nullpx;
  cursor: pointer;
  color: #3751ff;
`;

export const Input = styled.input`
  width: 316px;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  //styleName: Reg 14 (0.3 px);
  font-family: Mulish;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;


  &::placeholder {
    color: background: rgbargba(252, 253, 254, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;

export const LoginSubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #ffffff;
  font-family: Mulish;
  font-style: normal;
  font-size: 14px;
  font-weight: 600;
  border: none;
  // border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  // box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
  background: #6e9d30;
  /* button / accent default */

  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  border-radius: 8px;
`;
export const SignUpSubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #ffffff;
  font-family: Mulish;
  font-style: normal;
  font-size: 14px;
  font-weight: 600;
  border: none;
  // border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  // box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
  background: #700193;
  /* button / accent default */

  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  border-radius: 8px;
`;
export const WithGoogleSubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #ffffff;
  font-family: Mulish;
  font-style: normal;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  text-align: center;

  border: none;
  // border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  // box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
  background: #db2721;
  /* button / accent default */

  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  border-radius: 8px;
`;
export const Label = styled.a`
  height: 16px;
  width: 316px;
  left: 0px;
  top: 0px;
  border-radius: nullpx;
  //styleName: Bold 12 (0.3 px, CAPS);
  font-family: Mulish;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0.30000001192092896px;
  text-align: left;
  color: rgba(159, 162, 180, 1);
`;
