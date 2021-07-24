import React from "react";

const TechItem = ({ name, image, currency, prices }) => {
	return (
		<div className='single_item'>
			<img alt={name} src={image} />
			<h3>{name}</h3>
			<h3>
				{currency} {prices}
			</h3>
		</div>
	);
};

export default TechItem;
