import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type AddToCartPayload = {
  id: number;
  name: string;
  regularPrice: number;
  discount: number;
  form: string;
};

export type CartItem = {
  id: number;
  name: string;
  quantity: number;
  regularPrice: number;
  discount: number;
  form: string;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<AddToCartPayload>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        state.items[itemIndex].quantity--;
      }
    },
    resetCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
