import React from 'react';
import { StylesProvider, createMuiTheme, ThemeProvider as MaterialThemeProvider } from '@material-ui/core';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Header from './Header';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#3f51b5',
			dark: '#283593',
			light: '#7986cb',
		},
		secondary: {
			main: '#e91e63',
		},
		text: {
			primary: '#263238',
			secondary: '#546e7a',
		},
	},
	typography: {
		fontFamily: "'roboto', sans-serif",
	}
});

function App() {
	return (
		<StylesProvider injectFirst>
			<MaterialThemeProvider theme={theme}>
				<StyledThemeProvider theme={theme}>
					<React.Fragment>
						<Header />
					</React.Fragment>
				</StyledThemeProvider>
			</MaterialThemeProvider>
		</StylesProvider>
	);
}

export default App;
