import React, { useState } from 'react';
import styled from 'styled-components';
import { SwipeableDrawer, IconButton, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { media } from '../modules/helper';
import { Link as RouterLink } from 'react-router-dom';

const MenuButton = styled(IconButton)`
	display: inline;
	position: absolute;
	left: 15px;
	top: 2px;
	${media.greaterThan('desktop')`
		display: none;
	`}
`;

const DrawerContents = styled.div`
	width: 250px;
	height: 100%;
	background-color: ${props => props.theme.palette.primary.main};
`;
const ItemText = styled(ListItemText)`
	color: white;
	font-family: ${props => props.theme.typography.fontFamily};
`;
const Link = styled(RouterLink)`
	width: 100%;
	text-decoration: none;
`;

const Drawer = () => {
	const [drawerOpen, toggleDrawer] = useState(false);
	return (
		<div>
			<MenuButton edge="start" color="inherit" aria-label="menu" disableRipple disableFocusRipple onClick={() => { toggleDrawer(true) }}>
				<MenuIcon fontSize="large" style={{ color: 'white' }} />
			</MenuButton>
			<SwipeableDrawer anchor="left" open={drawerOpen} onOpen={() => { toggleDrawer(true) }} onClose={() => { toggleDrawer(false) }}>
				<DrawerContents>
					<List>
						<ListItem>
							<Link to="/" onClick={() => { toggleDrawer(false) }}>
								<ItemText primary="ホーム" />
							</Link>
						</ListItem>
						<Divider />
						<ListItem>
							<Link to="/works" onClick={() => { toggleDrawer(false) }}>
								<ItemText primary="つくったやつ" />
							</Link>
						</ListItem>
						<Divider />
						<ListItem>
							<Link to="/works_unavailable" onClick={() => { toggleDrawer(false) }}>
								<ItemText primary="つくったやつ(過去)" />
							</Link>
						</ListItem>
					</List>
				</DrawerContents>
			</SwipeableDrawer>
		</div>
	);
};

export default Drawer;
