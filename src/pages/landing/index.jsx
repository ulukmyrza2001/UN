import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from './../../constants/routes';
import Searchbar from '../../components/searchBar';
import Header from './layout/Header';
import UNlogo from '../../assets/logo.svg';
import CMlogo from '../../assets/cm-logo.svg'
import KProducts from './KProducts';
import ThematicAreas from './ThematicAreas';

const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Content = styled.div`
	padding-top: 75px;
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 600px;
`;

const Title = styled.div`
	font-family: Mulish;
	font-style: normal;
	font-weight: bold;
	font-size: 54px;
	line-height: 70px;
	text-align: center;
	letter-spacing: 0.2px;
	color: #4C3F64;
	margin-bottom: 16px;
`;

const Subtitle = styled.div`
	font-family: Mulish;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 28px;
	text-align: center;
	letter-spacing: 0.3px;
	color: rgba(7, 32, 79, 0.5);
`;

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-contnet: center;
`;

const Logo = styled.img`
	padding: 30px 20px;
`;

const Section = styled.div`
	margin-top: 50px;
	width: 100%;
`;

const SectionTitle = styled.div`
	font-family: Mulish;
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: 0.2px;
	color: #000000;
`;

const SectionSubtitle = styled.div`
	font-family: Mulish;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	color: #868686;
	margin-top: 8px;
`;

const Landing = () => {
	const [searchText, setSearchText] = useState('');
	const navigate = useNavigate();

	function handleSearch() {
		if (searchText) {
			navigate(`${ROUTES.SEARCH}?q=${searchText}`);
		}
	}

	return (
		<Container>
			<Header />
			<Content>
				<Title>Plastic-free Rivers</Title>
				<Subtitle>A space to promote knowledge sharing increase awaraness about plastic leakage and pollution reduction in Asia and the Pacific region</Subtitle>
				<LogoContainer>
					<Logo src={CMlogo} />
					<Logo src={UNlogo} />
				</LogoContainer>
				<Searchbar
					searchText={searchText}
					onSearchTextChange={setSearchText}
					onSearch={handleSearch}
				/>
				<Section>
					<SectionTitle>Knowledge products</SectionTitle>
					<SectionSubtitle>Please select related Knowledge product  to explore.</SectionSubtitle>
					<KProducts />
				</Section>
				<Section>
					<SectionTitle>Thematic areas</SectionTitle>
					<SectionSubtitle>Please select related Thematic areas  to explore.</SectionSubtitle>
					<ThematicAreas />
				</Section>
			</Content>
		</Container>
	);
};

export default Landing;
