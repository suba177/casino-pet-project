const defaultState = { value: null };

export const casinoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_INTEGER":
      return { ...state, value: action.payload };
    default:
      return state;
  }
};
