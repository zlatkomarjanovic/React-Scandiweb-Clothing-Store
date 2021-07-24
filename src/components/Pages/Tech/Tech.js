import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { getDataFromTree } from "@apollo/react-ssr";
import TechItem from "./TechItem";
const Women = () => {
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
			setStuff(data.categories[1].products);
			console.log(data.categories[1].products[0].prices[0].amount);
		}
	}, [data]);

	return (
		<div className='grid_container'>
			{stuff.map((val) => {
				return (
					<TechItem
						image={val.gallery}
						name={val.name}
						currency={val.prices[0].currency}
						amount={val.prices[0].amount}
					/>
				);
			})}
		</div>
	);
};

export default Women;
