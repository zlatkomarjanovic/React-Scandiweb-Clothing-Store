import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const CurrencyModal = ({ currencyModal, setCurrencyModal }) => {
	return (
		<Modal className='mini_cart_currency' isOpen={currencyModal}>
			<div id='minicart' className='mini_cart_container'>
				<button
					className='close_button_curr'
					onClick={() => setCurrencyModal(false)}
				>
					X
				</button>
				<h2>$ USD</h2>
				<h2>€ EUR</h2>
				<h2>¥ JPY</h2>
			</div>
		</Modal>
	);
};

export default CurrencyModal;
