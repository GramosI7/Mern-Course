import React, { Component } from 'react'
import axios from "axios";

class EditCours extends Component {

    state = {
        coursId : [],
        title: "",
        author : "",
        body: "",
        img: ""
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        axios.get(`http://localhost:4000/cours/${id}`)
            .then((response) => {
            console.log(response);
            this.setState({
                coursId : response.data,
                title : response.data.title,
                author : response.data.author,
                body : response.data.body,
                img : response.data.img
            }, () => console.log("State of SingleCours : ", this.state.img))
        })
            .catch((error) => {
            console.log(error);
        })
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


  render() {
      const {coursId, title, author, body, img} = this.state;
      const { id } = this.props.match.params;

    return (
        <div className="container">
                    <br/>
                    <h1>Modifier votre cours</h1>
                    
                <form method='POST' action={`http://localhost:4000/cours/edit/${id}`} encType="multipart/form-data">
                    
                    <div className="formgroup">
                    <br/>
                        <label>Titre</label>
                        <input type="Text" name="title" className="form-control" onChange={this.handleOnChange} value={title}/>
                    </div>
                    
                    <div className="formgroup">
                    <br/>
                        <label>Auteur</label>
                        <input type="text" name="author" className="form-control" onChange={this.handleOnChange} value={author}/>
                    </div>
                   
                    <div className="formgroup">
                    <br/>
                        <label>Description du cours</label>
                        <textarea type="text" name="body" className="form-control" onChange={this.handleOnChange} value={body}/>
                    </div>
                    
                    <div className="formgroup">
                    <br/>
                        <label>Image</label>
                        <input type="file" name="img" className="form-control"/>
                    </div>
                    <br/>
                    <button className="btn btn-primary" type="submit">Ajouter</button>
                </form>
            </div>
    )
  }
}

export default EditCours;