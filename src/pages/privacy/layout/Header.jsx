import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../../../assets/logo.svg'
import media from '../../../helpers/media'
import burger from '../../../assets/coolicon.svg'
import { Drawer } from 'antd'
import { IoMdClose } from 'react-icons/io'

console.log(media)

const Container = styled.div`
	padding: 24px 66px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: -webkit-fill-available;
	${media.tablet`
	  padding: 24px 40px;
	`}
	${media.mobile`
	  padding: 24px 25px;
	  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.15);
	`}
`

const Logo = styled.img``

const Burger = styled.img`
	width: 24px;
	height: 24px;
`

const Navs = styled.div``

const NavLink = styled.a`
	text-decoration: none;
	font-family: Mulish;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 18px;
	letter-spacing: 0.2px;
	color: #373f41;
	margin: 0px 24px;
	border-bottom-width: 2px;
	border-bottom-style: solid;
	border-bottom-color: ${(props) => (props.active ? '#3281F7' : '#00000000')};
	${media.mobile`
	display: none;
	`}
	${media.tablet`
	display: none;
	`}
`
const NavBarBurger = styled.div`
	opacity: 0;
	cursor: pointer;

	${media.tablet`
	 opacity:1;
	`}

	${media.mobile`
	opacity:1;
	`}
`

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
]

const Header = () => {
	const [visible, setVisible] = useState(false)

	const showDrawer = () => {
		setVisible(true)
	}
	const onClose = () => {
		setVisible(false)
	}

	function renderNavLinks() {
		const isLinkActive = (link) => link === window.location.pathname
		const linkList = LINKS.map(({ path, label }) => (
			<NavLink key={path} active={isLinkActive(path)} href={path}>
				{label}
			</NavLink>
		))
		return <Navs>{linkList}</Navs>
	}

	return (
		<Container>
			<Drawer
				title={' '}
				height={600}
				onClose={onClose}
				visible={visible}
				placement='top'
				closeIcon={<IoMdClose fontSize='30px' color='#00AEEF' />}
			>
				<p>Home</p>
				<p>About</p>
				<p>Thematic pages</p>
				<p>Partners</p>
				<p>Data</p>
			</Drawer>
			<a href='/'>
				<Logo src={logo} />
			</a>
			{renderNavLinks()}
			<NavBarBurger onClick={showDrawer}>
				<Burger src={burger} />
			</NavBarBurger>
		</Container>
	)
}

export default Header