import React from 'react';

import { Content } from './components/layout/Content';
import { Header } from './components/layout/Header';
import { SelectedProjectProvider, ProjectsProvider } from './context';
export function App() {
	return (
		<SelectedProjectProvider>
			<ProjectsProvider>
				<main>
					<Header />
					<Content />
				</main>
			</ProjectsProvider>
		</SelectedProjectProvider>
	);
}
