import {movies$} from '../movies'

export const listMovies = () => async (dispatch) => {
  try {
    const data = await movies$;
    dispatch({ type: "MOVIES_LIST_SUCCESS", payload: data });
  } catch (error) {
          console.log(error);
  }
};
export const listProductCategories = () => async (dispatch) => {
  try {
    const cards = await movies$;
    dispatch({ type: "MOVIES_LIST_SUCCESS", payload: cards });
    // return await cards.text();
  } catch(e) {
    console.log(e);
  }
};

export const selectCategory = (categ) => {
  return {
    type: "SELECT_CATEGORY_ITEM",
    categ
  }
}

export const removeMovie = (id) => {
  return {
    type: "REMOVE_MOVIE",
    id
  }
}