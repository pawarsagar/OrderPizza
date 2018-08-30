import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, ImageHeader } from "react-simple-card";
import Popup from "reactjs-popup";
import PopupContent from '../PopUp/PopupContent';
import PlaceOrder from './PlaceOrder';
import CartList from '../Cart/CartList';
import { ShoppingCart } from 'react-feather'
import { Link } from 'react-router-dom';
import {AddCart} from '../Cart/AddCart'

export default class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      cart: []
    }


  }



  componentDidMount() {
    fetch('http://localhost:3000/matches')
      .then((Response) => Response.json())
      .then((findresponse) => {
        //   console.log(findresponse)
        this.setState({
          items: findresponse
        })
       
      })

   


  }


  
  render() {

    return (
      <div className="container col-sm-12" style={{ backgroundColor: "white", display: "inline-block", flexDirection: "row" }} >
       <div className="  card-title card-text col-sm-2"  >
        <Link to="/CartList">
            
            <span className='glyphicon glyphicon-shopping-cart btn btn-info btn-lg col-sm-12'>CartList</span>
          </Link>

          
          </div>

        <div className="  card-title card-text col-sm-12"  >

          <h1 style={{ color: "red", backgroundColor: "lightGreen" }} align="Center">  Pizza List </h1>
         
        </div>
        <div >

          {this.state.items.map((dynamicData, key) => {
       
            return (
              <div className="card col-sm-6" style={{ width: "50%", backgroundColor: "ivory" }}>
                <div className="card-body" key={dynamicData.id} style={{ fontSize: "16px", color: "red" }}>
                  <h5 className="card-title">{dynamicData.recipeName}</h5>

                  <img className="card-img-top" src={dynamicData.imageUrlsBySize[90]} style={{ width: "20%" }} key={key}/>



                  <Popup trigger={<span> <button className="btn btn-primary" onClick={e => this.updateState(dynamicData.recipeName)}>Details</button> </span>} position="right center" modal closeOnDocumentClick>



                    <PopupContent id={dynamicData.id} recipeName={dynamicData.recipeName} course={dynamicData.attributes.course} image={dynamicData.imageUrlsBySize[90]} ingredients={dynamicData.ingredients} price={dynamicData.price} />
                  </Popup>
                {/*   <Popup trigger={<span><button className="btn btn-info" >Add to Cart </button></span>} position="right center" modal closeOnDocumentClick>
                    <AddCart id={dynamicData.id} recipeName={dynamicData.recipeName} course={dynamicData.attributes.course} image={dynamicData.smallImageUrls} price={dynamicData.price} coupon={dynamicData.Coupon} />
                  </Popup> */}
                  <Popup trigger={<span> <button className="btn btn-success" >Add To Cart</button>  </span>} position="right center" modal closeOnDocumentClick>
                    <PlaceOrder id={dynamicData.id} recipeName={dynamicData.recipeName} course={dynamicData.attributes.course} image={dynamicData.smallImageUrls} price={dynamicData.price} coupon={dynamicData.Coupon} />
                  </Popup>

                </div>
              </div>)
          })}



        </div>


      </div>
    )
  }

}


const headerStyle = {
  width: "75%"
}

const horizontol = {

  display: "inline-block"
}
