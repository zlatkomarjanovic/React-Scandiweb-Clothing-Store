import React, { Fragment } from "react";

const RenderItem = ({
	image,
	name,
	currency,
	price,
	brand,
	viewItemInfo,
	id,
	inStock,
}) => {
	return (
		<Fragment>
			{inStock ? (
				<div onClick={() => viewItemInfo(id)} className='single_item'>
					<div>
						{" "}
						<img alt={name} src={image} />
						<h3>
							{brand} {name}
						</h3>
						<h3>
							<span style={{ fontWeight: "bold" }}>
								{currency} {price}
							</span>
						</h3>
					</div>
				</div>
			) : (
				<div
					onClick={() => viewItemInfo(id)}
					className='single_item_outofstock'
				>
					<h3 className='out_of_stock'>OUT OF STOCK</h3>
					<img alt={name} src={image} />
					<h3>
						{brand} {name}
					</h3>
					<h3>
						<span style={{ fontWeight: "bold" }}>
							{currency} {price}
						</span>
					</h3>
				</div>
			)}
		</Fragment>
	);
};

export default RenderItem;
