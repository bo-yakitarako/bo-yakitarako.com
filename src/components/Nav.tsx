import React from 'react';
import styled from 'styled-components';
import { List as MaterialList, ListItem as MaterialListItem, ListItemText } from '@material-ui/core';
import { media } from '../modules/helper';
import { Link } from 'react-router-dom';

const Wrapper = styled.nav`
	display: none;
	margin-left: ${props => props.theme.spacing(1)}px;
	${media.greaterThan('desktop')`
		display: block;
		width: 300px;
	`}
`;

const Ad = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 250px;
	color: ${props => props.theme.palette.text.secondary};
	border: solid 1px ${props => props.theme.palette.primary.light};
	box-sizing: border-box;
	margin-bottom: ${props => props.theme.spacing(1)}px;
`;

const List = styled(MaterialList)`
	border-collapse: collapse;
	padding: 0;
`;
const ListItem = styled(MaterialListItem)`
	color: ${props => props.theme.palette.text.secondary};
	border: solid 1px ${props => props.theme.palette.primary.light};
	border-top: none;
	box-sizing: border-box;
`;
const ListItemTop = styled(ListItem)`
	border-top: solid 1px ${props => props.theme.palette.primary.light};
`;

const Nav = () => {
	return (
		<Wrapper>
			<Ad>広告予定地</Ad>
			<List>
				<Link to="/" style={{ textDecoration: 'none' }}>
					<ListItemTop button>
						<ListItemText primary="ホーム" />
					</ListItemTop>
				</Link>
				<Link to="/works" style={{ textDecoration: 'none' }}>
					<ListItem button>
						<ListItemText primary="つくったやつ" />
					</ListItem>
				</Link>
				<Link to="/works/unavailable" style={{ textDecoration: 'none' }}>
					<ListItem button>
						<ListItemText primary="つくったやつ(過去)" />
					</ListItem>
				</Link>
			</List>
		</Wrapper>
	);
};

export default Nav;
