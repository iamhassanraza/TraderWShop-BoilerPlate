import {
  createAction,
  createReducer,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';

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

const CartSlide = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    Add: (cart, action) => {
      // cart = state
      //write reducer logic here
      //you can directyl mutate state here
      cart.push(action.payload);
    },
    Remove: (cart, action) => {
      //directylMutate
    },
  },
});

export const {Add, Remove} = CartSlide.actions;
export default CartSlide.reducer;
