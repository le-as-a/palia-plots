import { configureStore } from '@reduxjs/toolkit';
import { cropSlice } from './slices/cropSlice';
import { plotSlice } from './slices/plotSlice';

export default configureStore({
  reducer: {
    crops: cropSlice,
    plots: plotSlice 
  }
});