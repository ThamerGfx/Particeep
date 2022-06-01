const initState = {
    categItem: [],
  }
  
  const movieReducer = (state = initState, action) => {
    if (action.type === "SELECT_CATEGORY_ITEM") {
      return {
        ...state,
        categItem: [...state.categItem, action.categ]
      }
    }
    return state
  }
  
  export default movieReducer;