import React, { Component } from 'react';
import CounterInput from 'react-bootstrap-counter';
import CardFooter from 'react-simple-card'

export default class PlaceOrder extends React.Component {
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

            userCoupon: null,
            firstname: null,
            lastname: null,
            Address: null,
            landmark: null


        }
        this.handleChange = this.handleChange.bind(this);
        this.submit=this.submit.bind(this);
    }



    handleChange(e) {
        if (e.target.id == "userCoupon") {
            console.log(this.state.finalAmount)
            if (this.state.coupon == e.target.value) {
                this.setState({
                    finalAmount: (this.state.price * this.state.qty) - (this.state.price * this.state.qty * 25 / 100)
                })
            } else {

            }
        } else {

            this.setState({ [e.target.id]: e.target.value });
        }


    }

    submit(){
        
         var data=JSON.stringify(this.state);
     fetch('http://localhost:3000/orders', {
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
            <form className="form-horizontal" role="form">
                <h5>Press Esc or Click anywhere to exit from this window</h5>

                <div className="panel-group">
                    <div className="panel panel-info">
                        <div className="panel-heading">Order Details</div>
                        <div className="panel-body">
                            <div className=" form-group" >
                                <label className="col-sm-8 control-label" style={{ textAlign: "left" }}><span>{`Your Ordered Pizza  : ${this.state.name}`}</span></label>

                                <label className="col-sm-2 control-label" >Quantity</label>

                                <CounterInput max={40} value={1} min={1} onChange={(value) => {
                                    this.setState({
                                        qty: value,
                                        finalAmount: this.state.price * value
                                    })


                                }} />


                            </div>
                            <div className=" form-group" >
                                <label className="col-sm-6 control-label" style={{ textAlign: "left" }}>
                                    <span>{`Price for One :    ${this.state.price}/- Rupees `}</span></label>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="panel panel-success">
                    <div className="panel-heading">Personal Details</div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label htmlFor="firstname" className="col-sm-2 control-label">First Name</label>

                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="firstname" placeholder="Enter First Name" onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastname" className="col-sm-2 control-label">Last Name</label>

                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="lastname" placeholder="Enter Last Name" onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="Address" className="col-sm-2 control-label">Address</label>

                            <div className="col-sm-10">
                                <textarea type="text" className="form-control" id="Address" placeholder="Address" rows="3" onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="landmark" className="col-sm-2 control-label">Landmark</label>

                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="landmark" placeholder="landmark" rows="3" onChange={this.handleChange} />
                            </div>
                        </div>



                    </div>
                </div>
                <div className="panel panel-warning">
                    <div className="panel-heading">Confirm Payment</div>
                    <div className="panel-body">
                        <div className=" form-group" >
                            <label className="col-sm-8 control-label" style={{ textAlign: "left" }}>
                                <span>{`Get 25% OFF on any pizza , Use Coupon Code here `}</span></label>
                            <div className="col-sm-4">
                                <input type="text" className="form-control" id="userCoupon" placeholder="Enter Coupon" onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className=" form-group" >
                            <label htmlFor="lastname" className="col-sm-6 control-label" style={{ textAlign: "left" }}>

                                <span>{`      Check Out Amount :-  ${
                                    this.state.finalAmount
                                    }/- Rupees `}</span></label>
                        </div>
                        <div className="form-group">
                            <div className=" col-sm-12" style={{ textAlign: "center" }}  >
                                <button type="submit" className="btn btn-primary" onClick={this.submit} >Confirm Order</button>
                            </div>
                        </div>
                    </div>

                </div>




            </form>

        )
    }

}