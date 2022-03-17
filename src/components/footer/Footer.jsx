import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
  }
`

const Container = styled.footer`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-top: 1px solid #e2e2e2;
	margin-top: 20px;
`

const NavLink = styled.a`
	display: inline-flex;
	flex-wrap: wrap;
	text-decoration: none;
	font-family: Mulish;
	font-weight: 600;
	font-size: 14px;
	letter-spacing: 0.2px;
	color: #373f41;
	margin: 10px 24px;
`
const Nav = styled.div`
	margin-top: 84px;
	margin-bottom: 60px;
`

const FooterEnd = styled.div`
	margin-bottom: 54px;
`
const LINKS = [
	{
		label: 'About',
	},
	{
		label: 'How to use',
	},
	{
		label: 'Data Catalog',
	},
	{
		label: 'Partners',
	},
	{
		label: 'Contacts',
	},
]

const footer = () => {
	function renderFooterLinks() {
		const linkList = LINKS.map(({ label }, index) => (
			<NavLink key={index}>{label}</NavLink>
		))
		return <Nav>{linkList}</Nav>
	}
	return (
		<>
			<GlobalStyle />
			<Container>
				{renderFooterLinks()}
				<FooterEnd>© 2021 UNEP. All rights reserved.</FooterEnd>
			</Container>
		</>
	)
}

export default footer
