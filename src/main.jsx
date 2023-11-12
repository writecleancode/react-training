import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/assets/styles/fonts.css';
import { Root } from './views/Root';
import { worker } from './mocks/browser';

worker
	.start({
		onUnhandledRequest: 'bypass',
	})
	.then(() => {
		ReactDOM.createRoot(document.getElementById('root')).render(
			<React.StrictMode>
				<Root />
			</React.StrictMode>
		);
	});
