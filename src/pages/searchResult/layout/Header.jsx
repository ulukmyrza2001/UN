import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useSearchParams } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import Searchbar from '../../../components/searchBar';
import Tabs from './Tabs';

const Container = styled.div`
	padding: 24px 66px 4px 66px;
	display: flex;
	align-items:center;
	width: -webkit-fill-available;
`;

const Logo = styled.img``;

const DropdownButton = styled(Button)`
	height: 40px;
	outline: none;
	border-radius: 6px;
`;

const DropDownOption = styled(Menu.Item)`
	height: 40px;
`;

const ThematicAreaSelectContainer = styled.div`
	margin-left: 40px;
`;

const LocationSelectContainer = styled.div`
	margin-left: 8px;
`;

const StyledSearchBar = styled(Searchbar)`
	height: 40px;
	margin: 0px;
	margin-left: 8px;
	width: 450px;
	padding: 0px 16px;
`;

const Header = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		if (searchText !== searchParams.get('q')) {
			setSearchText(searchParams.get('q'));
		}
	}, [searchParams]);

	function handleSearch() {
		if (searchText) {
			setSearchParams({ q: searchText })
		}
	}

	function renderThematicAreasSelector() {
		const menu = (
			<Menu onClick={() => null}>
				<DropDownOption key="1">
					All categories
				</DropDownOption>
				<DropDownOption key="2">
					Plastic leakage
				</DropDownOption>
				<DropDownOption key="3">
					Policy recomendation
				</DropDownOption>
				<DropDownOption key="4">
					Scientific articles
				</DropDownOption>
			</Menu>
		);

		return (
			<ThematicAreaSelectContainer>
				<Dropdown overlay={menu}>
					<DropdownButton>
						Thematic pages <DownOutlined />
					</DropdownButton>
				</Dropdown>
			</ThematicAreaSelectContainer>
		);
	}

	function renderLocationSelector() {
		const menu = (
			<Menu onClick={() => null}>
				<DropDownOption key="1">
					All categories
				</DropDownOption>
				<DropDownOption key="2">
					Plastic leakage
				</DropDownOption>
				<DropDownOption key="3">
					Policy recomendation
				</DropDownOption>
				<DropDownOption key="4">
					Scientific articles
				</DropDownOption>
			</Menu>
		);

		return (
			<LocationSelectContainer>
				<Dropdown overlay={menu}>
					<DropdownButton>
						Location <DownOutlined />
					</DropdownButton>
				</Dropdown>
			</LocationSelectContainer>
		);
	}

	return (
		<>
			<Container>
				<a href='/'>
					<Logo src={logo} />
				</a>
				{renderThematicAreasSelector()}
				<StyledSearchBar
					searchText={searchText}
					onSearchTextChange={setSearchText}
					onSearch={handleSearch}
					placeholder="Search for ..."
				/>
				{renderLocationSelector()}
			</Container>
			<Tabs />
		</>
	);
};

export default Header;