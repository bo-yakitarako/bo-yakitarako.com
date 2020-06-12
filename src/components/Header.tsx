import React from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../modules/helper';

const Animate = keyframes`
	0% {
		transform: translateY(0) rotate(0deg);
		opacity: 1;
		border-radius: 0;
	}

	100% {
		transform: translateY(calc(-50vh - 150px)) rotate(720deg);
		opacity: 0;
		border-radius: 50%;
	}
`;

const HeaderWrapper = styled.header`
	position: relative;
	background: ${props => props.theme.palette.primary.main};  
	width: 100%;
	height: 50vh;
`;

const RectUl = styled.ul`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;
const Rect = styled.li`
	position: absolute;
	display: block;
	list-style: none;
	width: 20px;
	height: 20px;
	background: rgba(255, 255, 255, 0.2);
	animation: ${Animate} 25s linear infinite;
	bottom: -150px;
	&:nth-child(1) {
		left: 25%;
		width: 80px;
		height: 80px;
		animation-delay: 0s;
	}
	&:nth-child(2){
		left: 10%;
		width: 20px;
		height: 20px;
		animation-delay: 2s;
		animation-duration: 12s;
	}
	&:nth-child(3){
		left: 70%;
		width: 20px;
		height: 20px;
		animation-delay: 4s;
	}
	&:nth-child(4){
		left: 40%;
		width: 60px;
		height: 60px;
		animation-delay: 0s;
		animation-duration: 18s;
	}
	&:nth-child(5){
		left: 65%;
		width: 20px;
		height: 20px;
		animation-delay: 0s;
	}
	&:nth-child(6){
		left: 75%;
		width: 110px;
		height: 110px;
		animation-delay: 3s;
	}
	&:nth-child(7){
		left: 35%;
		width: 150px;
		height: 150px;
		animation-delay: 7s;
	}
	&:nth-child(8){
		left: 50%;
		width: 25px;
		height: 25px;
		animation-delay: 15s;
		animation-duration: 45s;
	}
	&:nth-child(9){
		left: 20%;
		width: 15px;
		height: 15px;
		animation-delay: 2s;
		animation-duration: 11s;
	}
	&:nth-child(10){
		left: 85%;
		width: 150px;
		height: 150px;
		animation-delay: 0s;
		animation-duration: 11s;
	}
	&:nth-child(11){
		left: 0%;
		width: 120px;
		height: 120px;
		animation-delay: 0s;
		animation-duration: 14s;
	}
	&:nth-child(12){
		left: 95%;
		width: 30px;
		height: 30px;
		animation-delay: 10s;
		animation-duration: 18s;
	}
	&:nth-child(13){
		left: 55%;
		width: 80px;
		height: 80px;
		animation-delay: 5s;
		animation-duration: 20s;
	}
`;

const SendaiIcon = styled.img`
	position: absolute;
	height: 12vh;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	${media.greaterThan('tiny')`
		height: 15vh;
	`}
	${media.greaterThan('small')`
		height: 20vh;
	`}
`;
const PageTitle = styled.p`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, calc(-100% - 6.5vh));
	color: white;
	white-space: nowrap;
	font-size: 32px;
	font-weight: 700;
	${media.greaterThan('tiny')`
		transform: translate(-50%, calc(-100% - 8.5vh));
		font-size: 38px;
	`}
	${media.greaterThan('small')`
		transform: translate(-50%, calc(-100% - 11vh));
		font-size: 43px;
	`}
`;
const SubTitle = styled(PageTitle)`
	transform: translate(-50%, 7vh);
	font-size: 16px;
	font-weight: 100;
	${media.greaterThan('tiny')`
		transform: translate(-50%, 9vh);
		font-size: 18px;
	`}
	${media.greaterThan('small')`
		transform: translate(-50%, 12vh);
		font-size: 24px;
	`}
`;

const Header = () => {
	return (
		<HeaderWrapper>
			<RectUl>
				{[...Array(13)].map((val, index) => ( <Rect key={index} /> ))}
			</RectUl>
			<SendaiIcon alt="" src="/images/sendai.png" />
			<PageTitle>bo-yakitarako</PageTitle>
			<SubTitle>そこら辺にいるただの大学生です</SubTitle>
		</HeaderWrapper>
	)
};

export default Header;
