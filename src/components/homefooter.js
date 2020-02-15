import React, { Component } from "react";

const HomeFooter = (props) => {
	return (
		<div className="footer">
			<p>Wayfarer Index is a free project made to help the Niantic Wayfarer community.</p>
			<p>This wouldn't be possible without the information in the <a href="https://docs.google.com/spreadsheets/d/1rTfW8UJQ24ynoNLm0vHmOFUF5QNqVQieCvVvhj5ItRU/edit#gid=2106370663" target="_blank">Community Criteria Sheet</a>.</p>
			<p>Made with ♥ and ReactJS.</p>
			<div className="row">
				<div className="col links">
					<h3>Pokéstop Submission Guides</h3>
					<ul className="">
						<li>
							<a href="https://adgd.me/The-Definitive-guide-on-how-to-submit-the-perfect-Pokestop" target="_blank">
								Submitting the perfect Pokestop/Portal
							</a>
						</li>
						<li>
							<a href="https://adgd.me/The-Definitive-guide-on-how-to-submit-the-perfect-Pokestop-part-2-street-view" target="_blank">
								How to improve your chances with a Photosphere
							</a>
						</li>
						<li>
							<a href="https://adgd.me/The-Definitive-guide-on-how-to-submit-the-perfect-Pokestop-part-3-s2-cells-iitc" target="_blank">
								Understanding and using S2 Cells during submission
							</a>
						</li>
					</ul>
				</div>
				<div className="col donation">
					<div className="kofi">
						<a href='https://ko-fi.com/P5P5196AB' target='_blank'>
							<img src='https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/5ca5bf1dff3c03fbf7cc9b3c_Kofi_logo_RGB_rounded-p-500.png' height='24' />
							Buy me a Ko-fi!
						</a>
					</div>
					<div className="donate-crypto">
						<h3>Donate some Crypto</h3>
						<p><b>ETH:</b> <a href="#">milla.eth</a></p>
						<p><b>BTC:</b> <a href="#">1FiXbrMAQ6RAyCEV43QJzs5HfuZhTyZBbk</a></p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeFooter; 