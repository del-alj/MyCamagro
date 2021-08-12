import React from "react-dom";
import './App.css';
import { Layout } from 'antd';
import HeaderPage from "./components/header/header.js"
import SignupPage from "./containers/signupPage/signup"
import Main from "./containers/mainDiv/Main.js";
import LoginPage from "./containers/loginPage/login";
import { BrowserRouter as Router, Route } from 'react-router-dom';

const { Footer } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
        <HeaderPage />
        <div class="main">
          <Router>
            <Route exact path="/" component={Main} />
            <Route path="/Login" component={LoginPage} />
            <Route path="/Signup" component={SignupPage} />
          </Router>
        </div>
        <Footer
                  style={{
                    height: 120
                    , color: "black",
                    backgroundColor: "f7f7f7",
                    underline: { textDecorationLine: 'underline' },
                    border: "1px solid black"
                  }}
        >Footer</Footer>
      </Layout >
    </div >
  );
}

export default App;
