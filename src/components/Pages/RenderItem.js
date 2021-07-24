import React from "react";

const RenderItem = ({ image, name, currency, amount, brand }) => {
	return (
		<div className='single_item'>
			<img alt={name} src={image} />
			<h3>
				{brand} {name}
			</h3>
			<h3>
				<span style={{ fontWeight: "bold" }}>
					{currency} {amount}
				</span>
			</h3>
		</div>
	);
};

export default RenderItem;
