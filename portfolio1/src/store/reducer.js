export const initialState = {
	cart: []
};


// Selector inside of the reducer
export const getCartTotal = cart => cart.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				cart: [...state.cart, action.item]
			};
		case "REMOVE_FROM_CART": // case to remove items from the cart
			const index = state.cart.findIndex(cartItem => cartItem.id === action.id);
			let newCart = [...state.cart];
			if (index >= 0) {
				newCart.splice(index, 1); //index of the item
			} else {
				console.warn(`cant remove id ${action.id}`);
			}
			return {
				...state,
				cart: newCart
			};
		case "EMPTY_CART":
			return {
				...state,
				cart: []
			};
		default:
			return state;
	}
};

export default reducer;
