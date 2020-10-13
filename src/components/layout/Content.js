import React from 'react';
import { Sidebar } from './Sidebar';
import { Tasks } from '../Tasks';

export const Content = () => (
	<section className="content">
		<Sidebar />
		<h1>Tasks</h1>
		<Tasks />
	</section>
);
