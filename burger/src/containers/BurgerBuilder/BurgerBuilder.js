import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import BuildControls from '../../components/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';

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

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
      this.setState({ totalPrice: sum > 0 })
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients
    };
    updateIngredients[type] = updateCount;
    const priceAddition = INGREDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      ingredients: updateIngredients,
      totalPrice: newPrice
    });

    this.updatePurchaseState(updateIngredients);
  }

  render () {
    return (
      <Aux>
        <div>Modal
          <div>OrderSummary</div>
        </div>
        <Burger
          ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler} />
      </Aux>
    );
  }
}

export default BurgerBuilder;