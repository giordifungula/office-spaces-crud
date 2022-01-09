import React from 'react';
import ReactDOM from 'react-dom';
import theme from 'theme';
import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
// @local
import App from './App';

const ThemedApp = () => {
	return (
		<MuiThemeProvider theme={theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</MuiThemeProvider>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<ThemedApp />
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
