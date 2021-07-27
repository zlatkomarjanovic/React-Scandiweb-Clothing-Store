import React, { Fragment } from "react";
import { useCart } from "react-use-cart";

const ItemDetails = (props) => {
	const { price, name, gallery, description, inStock, brand } =
		props.currentItem;
	const { addItem } = useCart();

	const cartItem = {
		id: props.currentItem.id,
		name: props.currentItem.name,
		price: props.currentItem.prices[0].amount,
		image: props.currentItem.gallery[0],
		currency: props.currentItem.prices[0].currency,
		brand: props.currentItem.brand,
	};

	console.log(cartItem);
	return (
		<Fragment>
			<div>
				<div className='button' onClick={props.closeItemInfo}>
					<i className='fa fa-arrow-left'> </i>
					Go Back
				</div>
				<img alt={name} src={gallery[0]} />
				<div className='details_gallery'>
					<img className='details_gallery_hover' alt={name} src={gallery[1]} />
					<img className='details_gallery_hover' alt={name} src={gallery[2]} />
					<img className='details_gallery_hover' alt={name} src={gallery[3]} />
				</div>
			</div>

			<div>
				<h1 style={{ marginBottom: "4rem" }}>
					{brand} {name}
				</h1>
				<h3>PRICE : </h3>
				<h2 style={{ marginBottom: "4rem" }}>
					{props.currentItem.prices[0].currency}{" "}
					{props.currentItem.prices[0].amount}
				</h2>
				{inStock ? (
					<button
						onClick={() => addItem(cartItem)}
						className='button'
						style={{ marginBottom: "4rem" }}
					>
						Add to Cart
					</button>
				) : (
					<h3 className='red' style={{ marginBottom: "4rem" }}>
						<i className='far fa-times-circle'></i>Out of stock
					</h3>
				)}
				<br />
				<p style={{ marginBottom: "4rem" }}>{description}</p>
			</div>
		</Fragment>
	);
};

export default ItemDetails;
