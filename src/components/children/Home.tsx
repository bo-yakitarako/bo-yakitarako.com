import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Typography, Divider } from '@material-ui/core';
import { media } from '../../modules/helper';

const SectionTitle = styled(Typography)`
	font-weight: 500;
	font-size: 24px;
	${media.greaterThan('tiny')`
		font-size: 28px;
	`}
	${media.greaterThan('small')`
		font-size: 32px;
	`}
	${media.greaterThan('medium')`
		font-size: 36px;
	`}
	${media.greaterThan('desktop')`
		font-size: 42px;
	`}
`;
const SectionContents = styled.div`
	margin-top: 10px;
`;
const SectionText = styled(Typography)`
	font-size: 14px;
	${media.greaterThan('tiny')`
		font-size: 16px;
	`}
	${media.greaterThan('small')`
		font-size: 18px;
	`}
	${media.greaterThan('medium')`
		font-size: 20px;
	`}
`;
const LinkStyle = css`
	color: ${props => props.theme.palette.secondary.main};
	text-decoration: none;
	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;
const Strong = styled(Link)`
	${LinkStyle}
`;
const Anchor = styled.a`
	${LinkStyle}
`;

const Home = () => {
	return (
		<React.Fragment>
			<SectionTitle>About</SectionTitle>
			<Divider />
			<SectionContents>
				<SectionText>Sparebeatに関するいろんなもの作ってました</SectionText>
				<SectionText><Strong to="/works">つくったやつ</Strong>からどうぞ</SectionText>
				<SectionText><Strong to="/works/unavailable">つくったやつ(過去)</Strong>は公開終了したものの供養です。南無〜</SectionText>
			</SectionContents>
			<SectionTitle style={{ marginTop: 20, }}>Contact</SectionTitle>
			<Divider />
			<SectionContents>
				<SectionText>Twitter: <Anchor href="https://twitter.com/bo_yakitarako">https://twitter.com/bo_yakitarako</Anchor></SectionText>
				<SectionText>GitHub: <Anchor href="https://github.com/bo-yakitarako">https://github.com/bo-yakitarako</Anchor></SectionText>
				<SectionText>Qiita: <Anchor href="https://qiita.com/bo_yakitarako">https://qiita.com/bo_yakitarako</Anchor></SectionText>
				<SectionText>Mail: <Anchor href="mailto:admin@bo-yakitarako.com">admin@bo-yakitarako.com</Anchor></SectionText>
			</SectionContents>
		</React.Fragment>
	);
};

export default Home;
