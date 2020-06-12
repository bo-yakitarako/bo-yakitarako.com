import React from 'react';
import { Divider } from '@material-ui/core';
import { Title } from './Works';
import Product from './Product';

const WorksUnavailable = () => {
	return (
		<React.Fragment>
			<Title>つくったやつ(過去)</Title>
			<Divider />
			<Product
				title="Sparebeat Rate System"
				release="2019年2月〜2020年1月"
				tech="PHP/JavaScript"
				content="Sparebeatのレートシステム"
				comment="一番アクセスが多かったやつ"
				image="rate_system"
			/>
			<Product
				title="Sparebeat Map Editor(Win版)"
				release="2019年6月〜2019年9月"
				tech="C#"
				content="Sparebeatの譜面作成ツール"
				comment="Windows用アプリで出した失敗作"
				image="no_image"
			/>
			<Product
				title="Sparebeat Score Attack"
				release="2020年3月〜2020年4月"
				tech="Laravel/React/Blueprint"
				content="Sparebeatでやるスコアタ"
				comment="ISHiPIEさんの企画です"
				image="score_attack"
			/>
			<Product
				title="Sparebeat Score Checker"
				release="2020年4月"
				tech="Laravel/React/Material-UI"
				content="創作譜面のスコア確認サイト"
				comment="2日でできたけど1日で亡くなった"
				image="score_checker"
			/>
		</React.Fragment>
	)
};

export default WorksUnavailable;
