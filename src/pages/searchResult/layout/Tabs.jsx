import React, { useState } from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
`;

const StyledMenu = styled(Menu)`
	padding-left: 160px;
`;

const MenuItemText = styled.span`
	font-family: Mulish;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 24px;
	letter-spacing: 0.2px;
	text-transform: uppercase;
	color: ${props => props.active ? '#000' : '#868686'};
`;

const mockData = ['All', 'Scientific research', 'Platforms & Tools', 'Learning', 'Policy & National', 'Other'];


const Tabs = () => {
	const [currentTab, setCurrentTab] = useState('1');

	function handleTabChange(e) {
		setCurrentTab(e.key);
	}

	function renderMenuItemList() {
		return mockData.map((item, index) => (
			<Menu.Item key={`${index}`}>
				<MenuItemText active={`${index}` === currentTab}>{item}</MenuItemText>
			</Menu.Item>
		));
	}

	return (
		<Container>
			<StyledMenu onClick={handleTabChange} selectedKeys={[currentTab]} mode="horizontal">
				{renderMenuItemList()}
			</StyledMenu>
		</Container>
	);
};

export default Tabs;
