// Initial state
const initialState = {
  loading: false,
};
  
// Document Reducer
export default function documentReducer (state = initialState, action) {
  switch (action.type) {
    // Increase Counter
    case 'INCREASE_COUNTER':
      return {
        ...state,
        loading: true,
      }

    // Decrease Counter
    case 'DECREASE_COUNTER':
      return {
        ...state,
        loading: false,
      }

    // Default
    default:
      return state;
  }
}