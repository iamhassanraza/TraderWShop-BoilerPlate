import {createSlice} from '@reduxjs/toolkit';
import data from '../data';
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
  products: data.products,
  items: [],
  favItems: [],
  totalItems: 0,
  totalPrice: 0,
};

const CartSlide = createSlice({
  name: 'cart',
  initialState: initial_cart,
  reducers: {
    Add: (cart, action) => {
      const {id} = action.payload;
      const existingItem = cart.items.find((item) => item.id == id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.items.push({...action.payload, quantity: 1});
      }
      cart.totalPrice = cart.totalPrice + formatPrice(action.payload.price);
      cart.totalItems++;
    },
    Remove: (state, action) => {
      const {payload} = action;
      const item = state.items.find((item) => item.id == payload.id);
      if (item) {
        if (item.quantity == 1) {
          const arr = state.items.filter((item) => item.id !== payload.id);
          state.items = arr;
        } else {
          item.quantity -= 1;
        }
        state.totalPrice = state.totalPrice - formatPrice(payload.price);
      }
    },
    emptyCart: (cart, action) => {
      cart.totalPrice = 0;
      cart.items = [];
    },
    addToFav: (cart, action) => {
      if (cart.favItems.hasOwnProperty(action.payload.id)) {
        console.log('removing from fav');
        delete cart.favItems[action.payload.id];
      } else {
        console.log('adding to fav');
        cart.favItems[action.payload.id] = action.payload;
      }
    },
    setColor: (cart, action) => {
      const {id} = action.payload;
      const existingItem = cart.items.find((item) => item.id == id);
      if (existingItem) {
        existingItem.color = action.payload.color;
      }
    },
    setSize: (cart, action) => {
      const {id} = action.payload;
      const existingItem = cart.items.find((item) => item.id == id);
      const existingIteminProducts = cart.products.find(
        (item) => item.id == id,
      );
      if (existingItem) {
        existingItem.size = action.payload.size;
      }
      existingIteminProducts.size = action.payload.size;
      console.log('existing item', existingIteminProducts);
      console.log('existing item 2', existingItem);
    },
  },
});

const formatPrice = (price) => {
  var formatted_price = parseFloat(price);
  formatted_price = formatted_price.toFixed(2);
  return parseFloat(formatted_price);
};
export const {
  Add,
  Remove,
  emptyCart,
  addToFav,
  setColor,
  setSize,
} = CartSlide.actions;
export default CartSlide.reducer;
