import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class AddedToCart extends React.Component {

    


    render() {

      
        return (
            <div style={{backgroundColor:"skyBlue"}} className="col-sm-12">
               
                    <h2 style={{color:"green"}}>Item is Added to the Cart</h2>
                    <Link to="/CartList">
                    <button type="btn" className="btn btn-primary" >Go to Cart</button>
                    </Link>
            </div>
        )
    }
}