import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, ImageHeader } from "react-simple-card";

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


updateState(data){
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
            <button onClick = {e=>this.updateState(dynamicData.recipeName)}>Buy</button>
          </div>
        })}

      </div>
    )
  }

}


const headerStyle = {
  width: "75%"
}
