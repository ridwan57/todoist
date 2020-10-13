import React, { useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';

export const Header = ({ darkMode, setDarkMode }) => {
	return (
		<header className="header" data-testid="header">
			<nav>
				<div className="logo">
					<img src="/images/logo.png" alt="Todoist" />
				</div>
				<div className="settings">
					<ul>
						<li className="settings__darkmode">
							<FaPizzaSlice />
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};
