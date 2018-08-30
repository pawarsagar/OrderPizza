import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,ImageHeader } from "react-simple-card";

const Header = () => {
  return <div align="center" className="Container"><Card >
  <ImageHeader imageSrc='https://lamiapizzeria.eatontheweb.com/custom/images/header.png' style={headerStyle}  />
  </Card>
  
  </div>
}


const headerStyle={
  width:"100%"
}
export default Header