import React, { Fragment } from "react";
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
const MiniCart = ({ minicartIsOpen, setMiniCart }) => {
	const { totalItems, items, cartTotal, updateItemQuantity } = useCart();

	return (
		<Modal className='mini_cart' isOpen={minicartIsOpen}>
			<div id='minicart' className='mini_cart_container'>
				<h2>
					My bag{" "}
					<span style={{ fontWeight: "lighter" }}> {totalItems} items</span>
				</h2>{" "}
				<button className='close_button' onClick={() => setMiniCart(false)}>
					{" "}
					X{" "}
				</button>
				<table className='table'>
					<tbody>
						{items.map((item, index) => {
							return (
								<Fragment>
									<td></td>
									<tr>
										<td style={{ display: "inline-block" }}>
											<h4 style={{ fontWeight: "lighter" }}>{item.brand}</h4>
											<h4 style={{ fontWeight: "lighter" }}>
												{item.name}
											</h4>{" "}
											<br />
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
													className='add_remove_mini '
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
													className='add_remove_mini '
													onClick={() =>
														updateItemQuantity(item.id, item.quantity - 1)
													}
												>
													{" "}
													-{" "}
												</button>
											</div>

											<img
												className='mini_cart_container_img'
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
				<div style={{ alignItems: "center", justifyContent: "center" }}>
					<NavLink exact to='/cart'>
						<button
							onClick={() => setMiniCart(false)}
							className='view_bag_button'
						>
							View Bag
						</button>
					</NavLink>
					<button className='button_mini_checkout'>Checkout</button>
				</div>
				<h3>TOTAL : {cartTotal}</h3>
			</div>
		</Modal>
	);
};

export default MiniCart;
