import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import css stylesheet
import "./App.css";

// Import components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./components/LoginForm";
import Signup from "./components/SignupForm";




function App() {
  return (

    <Router>
      <Router>
        <div className="application-header">
          <Header />
          <div className="main-sections">
            <Switch>
              {/* Define routes to render different page components at different paths */}
              <Route exact path="/">
                <Home />
              </Route>
              {/* Define a route that will take in variable data */}
              <Route exact path="/profile">
                <Profile />
              </Route>
              {/* Define a route that will take in variable data */}
              <Route exact path="/login">
                <Login />
              </Route>
              {/* Define a route that will take in variable data */}
              <Route exact path="/signup">
                <Signup />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Router>
  );
}

export default App;
