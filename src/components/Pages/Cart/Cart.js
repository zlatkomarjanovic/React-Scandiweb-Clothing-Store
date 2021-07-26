import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
	const {
		isEmpty,
		totalItems,
		items,
		totalUniqueItems,
		cartTotal,
		updateItemQuantity,
		removeItem,
		emptyCart,
	} = useCart();

	if (isEmpty) {
		return <h>Your Cart is Empty</h>;
	}
	return <div>{console.warn(items)}</div>;
};

export default Cart;
