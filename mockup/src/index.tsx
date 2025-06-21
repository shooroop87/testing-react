import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import './styles.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
root.render(
	<StrictMode>
		<div />
	</StrictMode>
);