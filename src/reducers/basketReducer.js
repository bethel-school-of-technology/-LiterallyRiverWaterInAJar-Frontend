import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from "../actions/types";

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    SJRiverSmall: {
     
      name: "St. John's River",
      numbers: 0,
  
     
      size: "small",
      price: 15.00,
    
    },
    SJRiverLarge: {
      productId: 0,
      name: "St. John's River",
      numbers: 0,
      inCart: false,
      description: "asfdsdafasdf",
      size: "large",
      price: 15.00,
      isMainProduct: false
    },
    ChicagoRiverSmall: {
      productId: 0,
      name: "Chicago River",
      numbers: 0,
      inCart: false,
      description: "asfdsdafasdf",
      size: "small",
      price: 15.00,
      isMainProduct: false
    },
    ChicagoRiverLarge: {
      productId: 0,
      name: "Chicago River",
      numbers: 0,
      inCart: false,
      description: "",
      size: "large",
      price: 15.00,
      isMainProduct: false
    },
    MississippiRiverSmall: {
      productId: 0,
      name: "Mississippi River",
      numbers: 0,
      inCart: false,
      description: "asfdsdafasdf",
      size: "small",
      price: 15.00,
      isMainProduct: false
    },
    MississippiRiverLarge: {
      productId: 0,
      name: "Mississippi River",
      numbers: 0,
      inCart: false,
      description: "asfdsdafasdf",
      size: "large",
      price: 15.00,
      isMainProduct: false
    },

  }}

export default(state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      let addQuantity = { ...state.products[action.payload] }
      console.log(addQuantity)
      return {
        basketNumbers: state.basketNumbers + 1
      }
    case GET_NUMBERS_BASKET:
      return {
        ...state
      }
    default:
      return state;
  }
}