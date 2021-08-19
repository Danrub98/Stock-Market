import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import css stylesheet
import "./App.css";

// Import components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Charts from "./pages/Charts";
import Login from "./components/LoginForm";
import Signup from "./components/SignupForm";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
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
              {/* Define a route that will take in variable data */}
              <Route exact path="/charts">
                <Charts />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Router>
    </ApolloProvider>

  );
}

export default App;
