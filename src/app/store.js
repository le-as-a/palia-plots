import { configureStore } from '@reduxjs/toolkit';
import cropSlice from './slices/cropSlice';

export default configureStore({
  reducer: {
    crops: cropSlice 
  }
})