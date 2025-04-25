import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IProduct[] = [];

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<IProduct>) {
			state.push(action.payload);
		},
		removeFromCart(state, action: PayloadAction<number>) {
			return state.filter((item) => item.id !== action.payload);
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
