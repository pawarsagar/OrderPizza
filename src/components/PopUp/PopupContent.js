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
            ingredients: props.ingredients

        }




    }


    render() {

        console.log(this.state.id)
        return (
            <div>
                <CardHeader><h5>Press Esc or Click anywhere to exit from this window</h5></CardHeader>
                <div className="container">
                    <h2>{this.props.recipeName}</h2>

                    <h3>Ingredients :- </h3>
                    {this.props.ingredients.map((data, key) => {
                        return <li key={key}>{data}</li>
                    })}




                </div>
            </div>
        )
    }
}