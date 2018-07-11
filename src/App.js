import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './style/App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

// Components
import Navbar from './components/Navbar';
import Input from './components/Input';
import ListFilm from './components/ListFilm';
import Home from "./components/Home";
import SingleCour from "./components/SingleCour";
import EditCours from "./components/EditCours";

class App extends Component {
  render() {
    return (
      <div>
       <Router>
         <div>
         <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={Input} />
            <Route exact path="/cours" component={ListFilm} />
            <Route exact path="/cours/:id" component={SingleCour} />
            <Route exact path="/cours/edit/:id" component={EditCours} />
            {/* <Route exact path="/cours/delete/:id" component={EditCours} /> */}
         </div>
       </Router>
      </div>
    );
  }
}

export default App;
