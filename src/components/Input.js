import React from "react";

const Input = () => {
   
        return (
            <div className="container">
                    <br/>
                    <h1>Creez votre cours !</h1>
                    
                <form method='POST' action="http://localhost:4000/cours/add" encType="multipart/form-data">
                    
                    <div className="formgroup">
                    <br/>
                        <label>Titre</label>
                        <input type="Text" name="title" className="form-control" placeholder="Titre du cours" required/>
                    </div>
                    
                    <div className="formgroup">
                    <br/>
                        <label>Auteur</label>
                        <input type="text" name="author" className="form-control" placeholder="Auteur du cours" required/>
                    </div>
                   
                    <div className="formgroup">
                    <br/>
                        <label>Description</label>
                        <textarea type="text" name="body" className="form-control"/>
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

export default Input;