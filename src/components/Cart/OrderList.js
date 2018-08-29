import React,{Component} from 'react';

export default class OrderList extends React.Component{
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
    }

    componentWillMount(){
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

    render(){
        return(
            <div>
                Hello World
            </div>
        )
    }

}