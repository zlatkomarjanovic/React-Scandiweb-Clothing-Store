import React, { Fragment } from "react";
import { useCart } from "react-use-cart";

const Cart = (props) => {
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
				<table className='table'>
					<tbody>
						{items.map((item, index) => {
							return (
								<Fragment>
									<td>
										<hr className='line' />
									</td>
									<tr>
										<td style={{ display: "inline-block" }}>
											<h2>{item.brand}</h2>
											<h2>{item.name}</h2> <br />
											<span style={{ fontWeight: "bold", marginBottom: 3 }}>
												{item.currency} {item.price}
											</span>
											<br />
											<button
												className='horizontal_button'
												onClick={() => removeItem(item.id)}
											>
												Remove Item
											</button>
										</td>
										<td
											style={{
												float: "right",
											}}
										>
											<div className='buttons'>
												<button
													className='add_remove'
													onClick={() =>
														updateItemQuantity(item.id, item.quantity + 1)
													}
												>
													{" "}
													+{" "}
												</button>
												<br />
												<p
													style={{
														textAlign: "center",
														justifyContent: "center",
														verticalAlign: "middle",
													}}
												>
													{item.quantity}
												</p>
												<br />
												<button
													className='add_remove'
													onClick={() =>
														updateItemQuantity(item.id, item.quantity - 1)
													}
												>
													{" "}
													-{" "}
												</button>
											</div>

											<img
												className='cart_container_img'
												alt={item.name}
												src={item.image}
											/>
										</td>
									</tr>
								</Fragment>
							);
						})}
					</tbody>
				</table>
				<h2>
					Total Price : {items.currency}
					{cartTotal}
				</h2>
				<button className='horizontal_button' onClick={() => emptyCart()}>
					Clear Cart
				</button>
			</div>
		</Fragment>
	);
};

export default Cart;
