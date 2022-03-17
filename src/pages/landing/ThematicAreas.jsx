import React from 'react'
import styled from 'styled-components'
import MockImg from '../../assets/mockArea.jpg'
import media from '../../helpers/media'

const Container = styled.div`
	padding-top: 24px;
	display: flex;
	flex-wrap: wrap;
`

const Item = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	background: #ffffff;
	box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24),
		0px 3px 8px -1px rgba(50, 50, 71, 0.05);
	border-radius: 8px;
	margin-right: 8px;
	margin-bottom: 20px;
	cursor: pointer;
	${media.tablet`
	margin-right:16px;
	`}
	${media.mobile`
	width: 120px;
	`}
`

const ItemPhoto = styled.img``

const ItemText = styled.span`
	font-family: Mulish;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 24px;
	color: #16192c;
	padding: 12px 6px 6px 12px;
`

const moclList = [
	'Scientific Research',
	'Platforms & Tools',
	'Projects',
	'Policy & National',
	'Learning',
	'Ontology',
]

const ThematicAreas = () => {
	function renderProductList() {
		return moclList.map((item) => (
			<Item key={item}>
				<ItemPhoto src={MockImg} />
				<ItemText>{item}</ItemText>
			</Item>
		))
	}

	return <Container>{renderProductList()}</Container>
}

export default ThematicAreas
