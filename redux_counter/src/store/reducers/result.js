import * as actionTypes from '../actions';

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
    return {
      ...state,
      results: state.results.concat({ id: new Date(), result: action.result })
    }
    default:
      return state;
  }
}

export default reducer;