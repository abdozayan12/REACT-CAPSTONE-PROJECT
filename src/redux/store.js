import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/countriesSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
