import React from 'react'
import styled from 'styled-components'
import media from '../../helpers/media'
import logo1 from '../../assets/logo/gic.png'
import logo2 from '../../assets/logo/rrcap.png'
import logo3 from '../../assets/logo/monre.png'
import logo4 from '../../assets/logo/chintan.png'
import logo5 from '../../assets/logo/tokio.png'
import logo6 from '../../assets/logo/jica.png'
import logo7 from '../../assets/logo/kitakyushu.png'
import logo8 from '../../assets/logo/mae.png'
import logo9 from '../../assets/logo/enda.png'
import logo10 from '../../assets/logo/energy.png'
import logo11 from '../../assets/logo/devinc.png'
import logo12 from '../../assets/logo/national.png'
import logo13 from '../../assets/logo/pirika_1024_avor9q.png'
import logo14 from '../../assets/logo/laosuni.png'
import logo15 from '../../assets/logo/cantho.png'
import logo16 from '../../assets/logo/exri.png'
import logo17 from '../../assets/logo/Ubu_logo.png'
import logo18 from '../../assets/logo/MRC.png'
import logo19 from '../../assets/logo/NOClogo.png'
import logo20 from '../../assets/logo/csirologo.png'
import logo21 from '../../assets/logo/cmslogo.png'

const data = [
	{
		logo: logo2,
		description: 'Asian Institute of Technology (Geoinfomatics Center)',
	},
	{
		logo: logo2,
		description: `RRC.AP AIT`,
	},
	{
		logo: logo3,
		description: 'Ministry of Natural Resource and Environment, Lao PDR',
	},
	{
		logo: logo4,
		description: 'Chintan Environmental Research and Action Group',
	},
	{
		logo: logo5,
		description: 'University of Tokyo',
	},
	{
		logo: logo6,
		description: 'Japan International Cooperation Agency',
	},

	{
		logo: logo7,
		description: 'City of Kitakyushu, Japan',
	},
	{
		logo: logo8,
		description: 'Mae Fah Luang University (MFU)',
	},
	{
		logo: logo9,
		description: 'Environment et Development Du TIERS-MONDE (Enda)',
	},

	{
		logo: logo10,
		description: 'The Energy and Resources Institute (TERI), India',
	},
	{
		logo: logo11,
		description: 'Development Alternatives',
	},
	{
		logo: logo12,
		description: 'National Productivity Council, India',
	},
	{
		logo: logo13,
		description: 'Can Tho University',
	},
	{
		logo: logo14,
		description: 'National University of Laos',
	},
	{
		logo: logo15,
		description: 'Pirika Inc',
	},
	{
		logo: logo16,
		description: `EX Research  Institute Ltd.`,
	},
	{
		logo: logo17,
		description: 'Ubon Ratchathani  University',
	},
	{
		logo: logo18,
		description: 'Mekong River Commission',
	},

	{
		logo: logo19,
		description:
			'Convention on the Conservation of Migratory Species of Wild Animals',
	},
	{
		logo: logo20,
		description:
			'Commonwealth Scientific and Industrial Research Organisation',
	},
	{
		logo: logo21,
		description: 'Oceanography Centre',
	},
]

const Content = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
	${media.desktop`
    justify-content:space-around;
    `}
`
const SubTitle = styled.h3`
	font-family: Mulish;
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 28px;
	text-align: center;
	color: #000000;
	max-width: 275px;
    ${media.desktop`
	margin:0 auto;
	`}
	${media.tablet`
	margin:0 auto;
	`}
	${media.mobile`
	font-size: 17px;
	`}
`
const Card = styled.div`
	position: relative;
	width: 330px;
	height: 250px;
	padding: 24px;
	border: 1px solid #e2e2e2;
	box-sizing: border-box;
	border-radius: 8px;
	text-align: center;
	${media.desktop`
    width:600px;
    margin:0 auto;
    `}
	${media.tablet`
    width: 90%;
    margin:0 auto;
    `}
	${media.mobile`
    width:100%;
    `}
`
const Img = styled.img`
	display: inline-flex;
	margin-bottom: 16px;
	@media (max-width: 380px) {
		width: 30%;
	}
`
const HrefButton = styled.button`
	position: absolute;
	top: 86%;
	border: none;
	background-color: transparent;
	font-family: Mulish;
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
	color: #1871e5;
	cursor: pointer;
	span {
		transition: 0.2s;
	}
	&:hover span {
		margin-left: 10px;
	}
	${media.tablet`
    left: 60%;
    `}
	${media.mobile`
    left: 40%;
    `}
`

const Cards = () => {
	return (
		<Content>
			{data.map((el) => (
				<Card key={el.description}>
					<Img src={el.logo} />
					<SubTitle>{el.description}</SubTitle>
					<HrefButton>
						View website <span className='span'>→</span>
					</HrefButton>
				</Card>
			))}
		</Content>
	)
}

export default Cards
