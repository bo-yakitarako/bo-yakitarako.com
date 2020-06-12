import React from 'react';
import styled from 'styled-components';
import { Divider } from '@material-ui/core';
import { SectionTitle } from './Home';
import Product from './Product';

export const Title = styled(SectionTitle)`
    font-weight: 900;
`;

const Works = () => {
	return (
		<React.Fragment>
			<Title>つくったやつ</Title>
			<Divider />
			<Product
				title="Sparebeat 段位認定"
				link="https://sgc.bo-yakitarako.com"
				release="2019年3月〜"
				tech="Laravel/React/Blueprint"
				content="Sparebeatの段位認定"
				comment="discordのbotも作った"
				image="grade"
			/>
			<Product
				title="Sparebeat Map Editor"
				link="https://editor.sparebeat.bo-yakitarako.com"
				release="2020年3月〜"
				tech="React/Blueprint"
				content="Sparebeatの譜面作成ツール"
				comment="React処女作です"
				image="editor"
			/>
			<Product
				title="Dog's Habitat"
				link="https://yassan882.bo-yakitarako.com"
				release="2020年4月〜"
				tech="Laravel/React/Material-UI"
				content="創作譜面公開ページ"
				comment="しいなちゃんかわいい！！！"
				image="dogs_habitat"
			/>
		</React.Fragment>
	)
};

export default Works;
