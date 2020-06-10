import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const Wrapper = styled.footer`
	position: relative;
	width: 100%;
    height: 40px;
    background: ${props => props.theme.palette.primary.main};
	${media.greaterThan('small')`
		height: 50px;
	`}
`;
const Copyright = styled.p`
	position: absolute;
	width: 100%;
	text-align: center;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	font-size: 14px;
	color: white;
	font-weight: 300;
	${media.greaterThan('small')`
		font-size: 16px;
	`}
`;

const Footer = () => {
    return (
        <Wrapper>
            <Copyright>&copy; bo-yakitarako 2020</Copyright>
        </Wrapper>
    );
};

export default Footer;
