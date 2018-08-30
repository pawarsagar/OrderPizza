import React from 'react';
import Header from './Header';
import Container from './Container/Container';
import CartList from './Cart/CartList';

import { HashRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div className="headContainer container-fluid">
        <Header />
      </div>
      <Router>
        {/* <Container/> */}
        <div>
        <Route exact path='/CartList' component={CartList} />
        <Route exact path='/' component={Container} />
       
        </div>
        </Router>
        
    </div>)
}

export default App