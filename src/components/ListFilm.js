import React from "react";
import axios from "axios";
import {NavLink} from 'react-router-dom';


// CSS
import "../style/Listfilm.css"


class ListFilm extends React.Component {
    
    state = {
        movie: []
    }

    componentDidMount() {
        axios.get("http://localhost:4000/cours")
        .then((response) => {
            // console.log(response);
            this.setState({
                movie : response.data
            }, () => console.log("state ! " ,this.state.movie))
          })
          .catch((error) => {
            console.log(error);
          })        
    }

    render() {
        return(
            <div className="container">
            <br/>
                <h1 className="text-center">
                    Liste des cours
                </h1>
                <br/>
                <div className="cours-container">
                    {this.state.movie.map((element, index) => {
                        return (
                            <div key={index} className="card" style={{width: "18rem", marginTop : "30px"}} >
                                <img className="card-img-top cours-container__img" src={`./uploads/${element.img}`} alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">{element.title}</h5>
                                    <h5 className="card-title">{element.years}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <NavLink className="btn btn-primary" to={`/cours/${element._id}`}>Voir plus</NavLink>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default ListFilm;