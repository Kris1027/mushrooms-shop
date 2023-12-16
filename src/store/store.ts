import { type Store, configureStore } from '@reduxjs/toolkit';

import { cartSlice } from './cartSlice';

export const store: Store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
