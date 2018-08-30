import React, { Component } from 'react';
import {  CardHeader} from "react-simple-card";
import PlaceOrder from '../Container/PlaceOrder'

export default class PopupContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            name: props.recipeName,
            course: props.course,
            image: props.image,
            ingredients: props.ingredients,
            price:props.price

        }




    }


    render() {

        console.log(this.state.id)
        return (
            <div style={{backgroundColor:"skyBlue"}} className="col-sm-12">
                <CardHeader><h5 style={{color:"black"}}>Press Esc or Click anywhere to exit from this window</h5></CardHeader>
                <div className="container col-sm-8">
                    <h2 style={{color:"green"}}> Pizza Name :- {this.props.recipeName}</h2>

                    <h3 style={{color:"purple"}}>Ingredients :- </h3>
                    {this.props.ingredients.map((data, key) => {
                        return <li key={key} style={{color:"black"}}>{data}</li>
                    })}
                    


                </div>
                <div className="col-sm-4">
                    <span><img src={this.props.image}  style={{ width: "70%" }}/></span>
                  
                    </div>
                    <h2 style={{color:"green"}}> Price  :- {this.props.price}</h2>
            </div>
        )
    }
}