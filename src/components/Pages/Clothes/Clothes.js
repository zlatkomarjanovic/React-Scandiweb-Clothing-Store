import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { getDataFromTree } from "@apollo/react-ssr";
import RenderItem from "../RenderItem";
const Clothes = () => {
	const GET_DATA = gql`
		query {
			categories {
				products {
					gallery
					name
					brand
					prices {
						amount
						currency
					}
					inStock
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
	useEffect(() => {
		if (data) {
			setStuff(data.categories[0].products);
			console.log(data.categories[0].products[1]);
		}
	}, [data]);

	stuff.map((val1) => {
		return console.log(val1.gallery[0]);
	});

	return (
		<div className='grid_container'>
			{stuff.map((val) => {
				return (
					<RenderItem
						brand={val.brand}
						image={val.gallery[0]}
						name={val.name}
						currency={val.prices[0].currency}
						amount={val.prices[0].amount}
					/>
				);
			})}
		</div>
	);
};

export default Clothes;
