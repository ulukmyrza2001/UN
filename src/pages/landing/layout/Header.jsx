import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/logo.svg';

const Container = styled.div`
	padding: 24px 66px;
	display: flex;
	align-items:center;
	justify-content: space-between;
	width: -webkit-fill-available;
`;

const Logo = styled.img``;

const Navs = styled.div``;

const NavLink = styled.a`
	text-decoration: none;
	font-family: Mulish;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 18px;
	letter-spacing: 0.2px;
	color: #373F41;
	margin: 0px 24px;
	border-bottom-width: 2px;
	border-bottom-style: solid;
	border-bottom-color: ${props => props.active ? '#3281F7' : '#00000000'};
`;

const LINKS = [
	{
		path: '/',
		label: 'Home',
	},
	{
		path: '/about',
		label: 'About',
	},
	{
		path: '/thematics',
		label: 'Thematic pages',
	},
	{
		path: '/partners',
		label: 'Partners',
	},
	{
		path: '/data',
		label: 'Data',
	},
];

const Header = () => {
	function renderNavLinks() {
		const isLinkActive = (link) => link === window.location.pathname;
		const linkList = LINKS.map(({ path, label }) => <NavLink key={path} active={isLinkActive(path)} href={path}>{label}</NavLink>);

		return (
			<Navs>
				{linkList}
			</Navs>
		);
	}

	return (
		<Container>
			<a href='/'>
				<Logo src={logo} />
			</a>
			{renderNavLinks()}
			<div />
		</Container>
	);
};

export default Header;