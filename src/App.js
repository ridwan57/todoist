import React from 'react';
import './App.css';
import { Content } from './components/layout/Content';
import { Header } from './components/layout/Header';
export function App() {
	return (
		<div className="App">
			<h1>App.js</h1>
			<Header />
			<Content />
		</div>
	);
}
