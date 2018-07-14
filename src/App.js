import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './style/App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
// Login
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authActions";
// Redux
import { Provider } from "react-redux";
import store from "./store"

// Components
import Navbar from './components/Navbar';
import Input from './components/Input';
import ListFilm from './components/ListFilm';
import Home from "./components/Home";
import SingleCour from "./components/SingleCour";
import EditCours from "./components/EditCours";
import Login from "./components/Login";
import Register from "./components/Register";

// Check for token
// Garde le user apres refresh
if(localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // decode token
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and is authenticated
  store.dispatch(setCurrentUser(decoded));
  // clear current profil
  // redirect to login
  // window.localtion.href = "/login"
}


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div>
          <Navbar />
              <Route exact path="/" component={Home} />
              <Route exact path="/add" component={Input} />
              <Route exact path="/cours" component={ListFilm} />
              <Route exact path="/cours/:id" component={SingleCour} />
              <Route exact path="/cours/edit/:id" component={EditCours} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
