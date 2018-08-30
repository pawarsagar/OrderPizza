import React, { Component } from 'react';
import CounterInput from 'react-bootstrap-counter';
import CardFooter from 'react-simple-card';
import Popup from "reactjs-popup";
import AddedToCart from "../AddedToCart"

export default class AddCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            qty: 1,
            id: props.id,
            name: props.recipeName,
            course: props.course,
            image: props.image,
            ingredients: props.ingredients,
            coupon: props.coupon,
            price: props.price,
            finalAmount: props.price,




        }
        
    }

   componentDidMount(){
    var data = JSON.stringify(this.state);
    fetch('http://localhost:3000/cart', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: data
    })
   }



    render() {
      
  


return (
    <div style={{backgroundColor:"skyBlue"}} className="col-sm-12">
               
                    <h2 style={{color:"green"}}>Thank you , Your Order is been added to Cart</h2>
            </div>

)

}  }