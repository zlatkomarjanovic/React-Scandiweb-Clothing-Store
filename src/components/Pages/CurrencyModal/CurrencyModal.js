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
				<div style={{ marginTop: "50px" }}>
					<h3>$ USD</h3>
					<h3>€ EUR</h3>
					<h3>¥ JPY</h3>
				</div>
			</div>
		</Modal>
	);
};

export default CurrencyModal;
