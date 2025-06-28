import './styles.css';
import { useEffect } from 'react';

export const App = () => {	
	useEffect(() => {
		console.log("Side-effect");
	}, []);

	return (		
		<div>Component Loaded</div>
	)
};