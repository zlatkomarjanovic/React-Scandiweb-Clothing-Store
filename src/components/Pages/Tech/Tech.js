import React, { useEffect, useState, Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import { getDataFromTree } from "@apollo/react-ssr";
import RenderItem from "../RenderItem";
import ItemDetails from "../ItemDetails";
const Tech = () => {
	const GET_DATA = gql`
		query {
			categories {
				products {
					id
					gallery
					name
					brand
					prices {
						amount
						currency
					}
					inStock
					description
					attributes {
						id
						name
						items {
							value
							displayValue
						}
					}
				}
			}
		}
	`;

	const { error, loading, data } = useQuery(GET_DATA);
	const [stuff, setStuff] = useState([]);
	const [currentItem, setCurrentItem] = useState(null);

	useEffect(() => {
		if (data) {
			setStuff(data.categories[1].products);
		}
	}, [data]);

	const viewItemInfo = (id) => {
		const filteredItem = stuff.filter((stuffitem) => stuffitem.id === id);
		const newCurrentItem = filteredItem.length > 0 ? filteredItem[0] : null;
		setCurrentItem(newCurrentItem);
	};

	const closeItemInfo = () => {
		setCurrentItem(null);
		console.log(currentItem);
	};

	return (
		<Fragment>
			{currentItem === null ? (
				<div className='grid_container'>
					{stuff.map((val) => {
						return (
							<RenderItem
								image={val.gallery[0]}
								name={val.name}
								currency={val.prices[0].currency}
								amount={val.prices[0].amount}
								viewItemInfo={viewItemInfo}
								inStock={val.inStock}
								id={val.id}
								item={val}
								{...stuff}
							/>
						);
					})}
				</div>
			) : (
				<div className='item_details_container'>
					<ItemDetails
						currentItem={currentItem}
						closeItemInfo={closeItemInfo}
						products={stuff}
						{...stuff}
					/>
				</div>
			)}
		</Fragment>
	);
};

export default Tech;
