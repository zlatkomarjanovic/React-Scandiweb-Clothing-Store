import React, { Fragment } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import Modal from "react-modal";
const MiniCart = ({ minicartIsOpen, setMiniCart }) => {
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

	return (
		<Modal className='mini_cart' isOpen={minicartIsOpen}>
			<div id='minicart' className='mini_cart_container'>
				<h2>Your Mini Cart</h2>
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
				<button onClick={() => setMiniCart(false)}>Close me</button>
			</div>
		</Modal>
	);
};

export default MiniCart;
