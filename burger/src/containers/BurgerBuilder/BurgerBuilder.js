import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import BuildControls from '../../components/BuildControls/BuildControls';

const INGREDIENTS_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {...};
  // }
  
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    purchasable: false,
    purchasing: false,
    totalPrice: 4
  }


  render () {
    return (
      <Aux>
        <div>Modal
          <div>OrderSummary</div>
        </div>
        <div>Burger</div>
        <BuildControls />
      </Aux>
    );
  }
}

export default BurgerBuilder;