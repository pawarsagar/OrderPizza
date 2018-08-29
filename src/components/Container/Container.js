import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, ImageHeader } from "react-simple-card";
import Popup from "reactjs-popup";
import PopupContent from '../PopUp/PopupContent';
import PlaceOrder from './PlaceOrder';
import OrderList from '../Cart/OrderList'

export default class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: [] }


  }
  componentDidMount() {
    fetch('http://localhost:3000/matches')
      .then((Response) => Response.json())
      .then((findresponse) => {
        //   console.log(findresponse)
        this.setState({
          items: findresponse
        })
        console.log(this.state.items[0].imageUrlsBySize[90])
      })


  }


  updateState(data) {
    alert(data)
    console.log("click event")
  }
  render() {

    return (
      <div>
        {this.state.items.map((dynamicData, key) => {
          console.log(this.state.items[key])
          return <div key={dynamicData.id}>
            {dynamicData.recipeName}
            <img src={dynamicData.imageUrlsBySize[90]} />



            <Popup trigger={<button onClick={e => this.updateState(dynamicData.recipeName)}>Details</button>} position="right center" modal closeOnDocumentClick>

              <div>

                <PopupContent id={dynamicData.id} recipeName={dynamicData.recipeName} course={dynamicData.attributes.course} image={dynamicData.smallImageUrls} ingredients={dynamicData.ingredients} />
              </div>
            </Popup>
            <Popup trigger={<button >Add to Cart </button>} position="right center" modal closeOnDocumentClick>
              <div>
                <OrderList id={dynamicData.id} recipeName={dynamicData.recipeName} course={dynamicData.attributes.course} image={dynamicData.smallImageUrls} price={dynamicData.price} coupon={dynamicData.Coupon} />
              </div>
            </Popup>
            <Popup trigger={<button >Instant Order</button>} position="right center" modal closeOnDocumentClick>
              <div>
                <PlaceOrder id={dynamicData.id} recipeName={dynamicData.recipeName} course={dynamicData.attributes.course} image={dynamicData.smallImageUrls} price={dynamicData.price} coupon={dynamicData.Coupon} />
              </div>
            </Popup>

          </div>
        })}

      </div>
    )
  }

}


const headerStyle = {
  width: "75%"
}

