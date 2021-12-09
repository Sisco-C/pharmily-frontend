import { Routes, Route } from "react-router-dom";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";

export const routes = () => {
  return (
    <Routes>
      <Route index={true} path={"/"} element={<Signin />} />
      <Route path={"/signin"} element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
