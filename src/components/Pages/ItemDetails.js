import React, { Fragment } from "react";

const ItemDetails = (props) => {
	const { id, name, gallery, description, inStock } = props.currentItem;

	console.log(props.currentItem);
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
				<h1>{name}</h1>
				<h3>PRICE : </h3>
				<h2>
					{props.currentItem.prices[0].currency}{" "}
					{props.currentItem.prices[0].amount}
				</h2>
				<button className='button'> Add to Cart </button> <br />
				{description}
			</div>
		</Fragment>
	);
};

export default ItemDetails;
