import React, { Fragment } from "react";
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
		return <h1>Your Cart is Empty</h1>;
	}
	return (
		<Fragment>
			<div className='cart_container'>
				<h1>Cart</h1>
				<h5> Total unique items : {totalUniqueItems}</h5>
				<h5> Total items : {totalItems}</h5>
				<table className=''>
					<tbody>
						{items.map((item, index) => {
							return (
								<tr>
									<td>{item.name}</td>
									<td>{item.price}</td>
									<td>
										<button
											onClick={() =>
												updateItemQuantity(item.id, item.quantity - 1)
											}
										>
											{" "}
											-{" "}
										</button>
									</td>
									<td>{item.quantity}</td>
									<td>
										<button
											onClick={() =>
												updateItemQuantity(item.id, item.quantity + 1)
											}
										>
											{" "}
											+{" "}
										</button>
										<button onClick={() => removeItem(item.id)}>
											Remove Item
										</button>
									</td>
									<td>
										<img alt={item.name} src={item.image} />
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<h2>Total Price : {cartTotal}</h2>
				<button onClick={() => emptyCart()}>Clear Cart</button>
			</div>
		</Fragment>
	);
};

export default Cart;
