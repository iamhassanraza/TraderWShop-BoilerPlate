import {createSlice} from '@reduxjs/toolkit';
import data from '../data'
// ________________________________________________________________________

// ACTIONS

// export const addTodo = createAction('ADD_TODO')  => creates an Action Creator
// addTodo({ text: 'Buy milk' }) => you can call an action like this and pass payload
// addTodo.type will return 'ADD_TODO'

// IMPORTANT ALWAYS EXPORT DEFAULT REDUCER
// Reducers

// export default createReducer([] , {
//      key => value
//      event: ()=> evenhandler

//      addTodo : (state,action)=> { you can even mutate state here easily }
//      OR
//      [addTodo.type] : (list, action) => { //xyz  }    this is more dynamic ( create key variable as addtodo type)
// })

// ________________________________________________________________________

// SIMPLEST WAY TO REDUCE CODE = CREATE SLICE

const initial_cart = {
  items: {},
  cart : {},
  totalItems: 0,
  totalPrice: 0,
};

const CartSlide = createSlice({
  name: 'cart',
  initialState: initial_cart,
  reducers: {
    Add: (cart, action) => {
      // cart = state
      //write reducer logic here
      //you can directyl mutate state here
      const {id} = action.payload;
      const existingItem = cart.items.hasOwnProperty(id);
      if (existingItem) {
        cart.items[id].quantity += 1;
      } else {
        cart.items[id] = {...action.payload, quantity: 1};
      }
      cart.totalItems++;
      cart.totalPrice = cart.totalPrice + formatPrice(action.payload.price);
    },
    Remove: (cart, action) => {
      const {id} = action.payload;
      const existingItem = cart.items.hasOwnProperty(id);
      if (existingItem) {
        if (cart.items[id].quantity == 1) {
          delete cart.items[id];
        } else {
          cart.items[id].quantity -= 1;
        }
        if (cart.totalItems > 0) {
          cart.totalItems--;
        }
        cart.totalPrice = cart.totalPrice - formatPrice(action.payload.price);
      }
    },
    emptyCart: (cart, action) => {
      cart.totalPrice = 0;
      cart.items = [];
    },
  },
});

const formatPrice = (price) => {
  var formatted_price = parseFloat(price);
  formatted_price = formatted_price.toFixed(2);
  return parseFloat(formatted_price);
};
export const {Add, Remove, emptyCart} = CartSlide.actions;
export default CartSlide.reducer;
