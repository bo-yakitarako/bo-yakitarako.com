import React from 'react';
import styled from 'styled-components';
import { Typography, Divider, Link } from '@material-ui/core';
import { media } from '../../modules/helper';

const Wrapper = styled.div`
    width: 100%;
	padding: ${props => props.theme.spacing(1)}px;
	box-sizing: border-box;
	border: solid 1px ${props => props.theme.palette.primary.light};
	margin-top: ${props => props.theme.spacing(1)}px;
`;

const Title = styled(Typography)`
	margin-left: ${props => props.theme.spacing(1)}px;
	font-size: 5.3vw;
	${media.greaterThan('desktop')`
		font-size: 24px;
	`}
`;

const Contents = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 49vw;
	margin-top: ${props => props.theme.spacing(1)}px;
	${media.greaterThan('tiny')`
		height: 50vw;
	`}
	${media.greaterThan('small')`
		height: 51vw;
	`}
	${media.greaterThan('desktop')`
		height: auto;
	`}
`;

const Description = styled.div`
	flex-grow: 1;
`;

const Text = styled(Typography)`
	font-size: 3.8vw;
	color: ${props => props.theme.palette.text.primary};
	${media.greaterThan('desktop')`
		font-size: 18px;
	`}
	${media.greaterThan('large')`
		font-size: 20px;
	`}
`;

const Image = styled.img`
	position: absolute;
	width: 100%;
	opacity: 0.4;
	z-index: -1;
	${media.greaterThan('desktop')`
		position: relative;
		opacity: 1;
		width: auto;
		height: 140px;
	`}
`;

interface IProps {
	title: string;
	link?: string;
	release: string;
	tech: string;
	content: string;
	comment: string;
	image: string;
}

const Product: React.FC<IProps> = (props: IProps) => {
	const { title, link, release, tech, content, comment, image } = props;
	return (
		<Wrapper>
			<Title>
				{link ? (
					<Link href={link} target="_blank" rel="noopener">{title}</Link>
				) : (
					title
				)}
			</Title>
			<Divider />
			<Contents>
				<Description>
					<Text>・リリース: {release}</Text>
					<Text>・使用技術: {tech}</Text>
					<Text>・制作内容: {content}</Text>
					<Text>・ひとこと: {comment}</Text>
				</Description>
					<Image alt="" src={`/images/${image}.jpg`} />
			</Contents>
		</Wrapper>
	);
};

export default Product;
