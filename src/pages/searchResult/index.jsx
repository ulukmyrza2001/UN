import React, { useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import Header from './layout/Header';
import MockResult from './../../assets/mockResult.png';

const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Content = styled.div`
	padding: 32px 160px;
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
`;

const KeyWordsSection = styled.div`
	background: #E8F3FF;
	border-radius: 12px;
	padding: 16px 20px;
	width: 100%;
	display: flex;
`;

const KeyWordContainer = styled.div`
	padding: 8px 16px;
    width: fit-content;
	cursor: pointer;
	background: #FFFFFF;
	border: 1px solid #E2E2E2;
	border-radius: 24px;
	margin-right: 16px;
`;

const KeyWord = styled.span`
	font-family: Mulish;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 24px;
	letter-spacing: 0.2px;
	color: #656770;
`;

const MockResultImage = styled.img`
	width: 100%;
	margin-top: 20px;
`;

const mockKeywordList = ['Waste management', 'Microplastic', 'Single use plastic', 'Plastic', 'Plastic pollution', 'Plastic leakage', 'Clean rivers'];

const SearchResult = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	function handleKeywordSelect(keyword) {
		setSearchParams({ q: keyword })
	}

	function renderSimillarKeywords() {
		const list = mockKeywordList.filter((item) => item !== searchParams.get('q')).map((keyword) => (
			<KeyWordContainer key={keyword} onClick={() => handleKeywordSelect(keyword)}>
				<KeyWord>{keyword}</KeyWord>
			</KeyWordContainer>
		));

		return (
			<KeyWordsSection>
				{list}
			</KeyWordsSection>
		);
	}

	return (
		<Container>
			<Header />
			<Content>
				{renderSimillarKeywords()}
				<iframe style={{ marginTop: 60 }} src="https://cm2-elasticsearch.kb.westeurope.azure.elastic-cloud.com:9243/app/dashboards#/view/a3a43cf0-9b88-11ec-a52f-fb7d39c646ea?auth_provider_hint=anonymous1&embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3A'2015-03-04T06%3A27%3A04.813Z'%2Cto%3Anow))" height="600" width="1920"></iframe>
			</Content>
		</Container>
	);
};

export default SearchResult;
