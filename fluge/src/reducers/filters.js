const initialState = {
  shiftFilter: '',
  airlineFilter: ''
};

export default function filters(state = initialState, action) {
  switch (action.type) {
    case 'APPLY_FILTER':
      return {
        ...state,
        [action.filter]: action.value
      };
    default:
      return state;
  }
}
