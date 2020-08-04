import { ADD_PRODUCT_BASKET } from "./types.js"

export const addBasket = (productName) => {
  return(dispatch) => {
    console.log("Adding to Basket");
    console.log("Product: ", productName);
    dispatch({
      type: ADD_PRODUCT_BASKET,
      payload: productName
    });
  }
}