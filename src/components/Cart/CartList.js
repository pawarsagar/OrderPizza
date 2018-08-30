import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CheckoutMessage from '../CheckoutMessage'
import Popup from "reactjs-popup";
export default class CartList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: [],
            confimed:"Not Placed"

        }
        this.isConfirm=this.isConfirm.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:3000/orders')
            .then((Response) => Response.json())
            .then((findresponse) => {
                //   console.log(findresponse)
                this.setState({
                    cart: findresponse
                })

            })
    }
isConfirm(){
    this.setState({
        confimed:"Placed"
    })
}
    render() {
        return (

            <div className="container col-sm-12" style={{ backgroundColor: "white", display: "inline-block", flexDirection: "row" }} >
                <div className="  card-title card-text col-sm-2"  >
                    <Link to="/" >
                        <span className=' btn btn-info btn-lg'>Home</span>
                    </Link>

                </div>

                <div className="  card-title card-text col-sm-12"  >

                    <h1 style={{ color: "red", backgroundColor: "lightGreen" }} align="Center">  Order List </h1>

                </div>
                <div >

                    {this.state.cart.map((dynamicData, key) => {
                        console.log(this.state.cart[key])
                        return (
                            <div className="card col-sm-6" style={{ width: "50%", backgroundColor: "ivory" }}>
                                <h5 className="card-title">{dynamicData.firstname + " " + dynamicData.lastname}</h5>
                                <div className="card-body" key={dynamicData.id} style={{ fontSize: "16px", color: "red" }}>
                                    <h4> Pizza Name :- <span>{dynamicData.name}</span></h4>
                                    <h4>Price:-        <span>{dynamicData.finalAmount}</span></h4>
                                    <h4>Quantity:-     <span>{dynamicData.qty}</span></h4>
                                    
                                    <h5 className="card-title">{"Your Order Status is :- " +this.state.confimed}</h5>



                                </div>
                            </div>)
                    })}

                  
                </div>

                <Popup trigger={<span><button className="btn btn-info"  onClick={this.isConfirm}>Confirm Order </button></span>} position="right center" modal closeOnDocumentClick>
                <CheckoutMessage  />
                </Popup>
            </div>

        )
    }

}