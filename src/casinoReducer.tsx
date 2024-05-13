const defaultState = { value: null, betValue: 0 };

export const casinoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_INTEGER":
      return { ...state, value: action.payload };
    case "GET_BETNUMBER":
      return { ...state, betValue: action.payload };
    default:
      return state;
  }
};
