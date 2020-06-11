import React from 'react';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { StylesProvider, createMuiTheme, ThemeProvider as MaterialThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import { media } from '../modules/helper';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Drawer from './Drawer';
import Home from './children/Home';

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
		fontFamily: "'Roboto', sans-serif",
	}
});

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	color: ${props => props.theme.palette.text.primary};
	font-family: ${props => props.theme.typography.fontFamily};
`;
const Contents = styled.div`
	display: flex;
	flex-direction: row-reverse;
	flex-grow: 1;
	width: 95%;
	margin: 20px auto;
	color: ${props => props.theme.palette.text.primary};
	${media.greaterThan('desktop')`
		width: 960px;
	`}
	${media.greaterThan('large')`
		width: 1080px;
	`}
`;
const Main = styled.main`
	display: block;
	flex-grow: 1;
`;

function App() {
	return (
		<StylesProvider injectFirst>
			<MaterialThemeProvider theme={theme}>
				<StyledThemeProvider theme={theme}>
					<BrowserRouter>
						<Wrapper>
							<Header />
							<Drawer />
							<Contents>
								<Nav />
								<Main>
									<Route exact path="/" component={Home} />
								</Main>
							</Contents>
							<Footer />
						</Wrapper>
					</BrowserRouter>
				</StyledThemeProvider>
			</MaterialThemeProvider>
		</StylesProvider>
	);
}

export default App;
