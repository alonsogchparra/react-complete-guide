import { put } from 'redux-saga/effects';

import axios from '../../axios-orders';
import actions from '../actions';

export function* initIngredientsSaga(action) {

  try {

    const response = axios.get('/ingredients.json')
    yield put(actions.setIngredients(response.data));

  } catch (error) {

    yield put(actions.fetchIngredientsFailed());
    
  }
}