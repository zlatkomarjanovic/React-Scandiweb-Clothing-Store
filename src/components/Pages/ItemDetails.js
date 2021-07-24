import React, { Fragment } from "react";

const ItemDetails = (props) => {
	const { id, name, price, gallery } = props.currentItem;

	console.log(props.currentItem);
	return (
		<Fragment>
			<div>
				<div className='button' onClick={props.closeItemInfo}>
					<i className='fa fa-arrow-left'> </i>
					Go Back
				</div>

				<img alt={name} src={gallery} />
				<h3>{name}</h3>
			</div>
			<div>fdasds</div>
		</Fragment>
	);
};

export default ItemDetails;
