import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import { routes } from "./routes";

// const AppContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

const App = () => {
  return (
    <div>
      <Router>
        {routes()}
        {/* <AppContainer>{/* <AccountBox /</AppContainer> */}
      </Router>
    </div>
  );
};

export default App;
