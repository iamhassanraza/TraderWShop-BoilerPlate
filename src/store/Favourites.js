import {createSlice} from '@reduxjs/toolkit';

const FavouriteItems = createSlice({
  name: 'FavouriteItems',
  initialState: {},
  reducers: {
    AddToFav: (list, action) => {
      const {id} = action.payload;
      const existingItem = list.hasOwnProperty(id);
      if (existingItem) {
        delete list[id];
      } else {
        list[id] = {...action.payload};
      }
    },
  },
});

export const {AddToFav} = FavouriteItems.actions;

export default FavouriteItems.reducer;
