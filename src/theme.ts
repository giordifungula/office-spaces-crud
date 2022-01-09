import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

export default responsiveFontSizes(
	createTheme({
		typography: {
			fontFamily: "'Inter', sans-serif",
			h1: {
				fontStyle: 'normal',
				fontWeight: 300,
				letterSpacing: '-0.015em',
			},
			h2: {
				fontStyle: 'normal',
				fontWeight: 600,
				letterSpacing: '2%',
				fontSize: '28px',
			},
			h3: {
				fontStyle: 'normal',
				fontWeight: 800,
				fontSize: '24px',
				letterSpacing: '-2%',
			},
			h4: {
				fontStyle: 'normal',
				fontWeight: 'normal',
				letterSpacing: '0.0025em',
			},
			h5: {
				fontStyle: 'normal',
				fontWeight: 'normal',
			},
			h6: {
				fontStyle: 'normal',
				fontWeight: 500,
				letterSpacing: '0.0015em',
			},
		},
		palette: {
			primary: {
				main: '#0D4477',
				contrastText: '#ffffff',
			},
			secondary: {
				main: '#484954',
				contrastText: '#ffffff',
			},
			warning: {
				main: '#D35F5F',
			},
			success: {
				main: '#7FC29B',
			},
			info: {
				main: '#53A2BE',
			},
		},
	}),
);
