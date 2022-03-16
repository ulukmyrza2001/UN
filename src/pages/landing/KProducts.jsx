import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
	padding-top: 24px;
	display: flex;
	flex-wrap: wrap;
`;

const Item = styled.div`
	margin-right: 16px;
	margin-bottom: 18px;
	padding: 0px 16px;
	background: #FFFFFF;
	box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.1);
	border-radius: 6px;
	height: 56px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	width: fit-content;
`;

const ItemText = styled.span`
	font-family: Mulish;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 0.2px;
	color: #656770;
`;

const moclList = ['Scientific Research', 'Platforms & Tools', 'Projects', 'Policy & National', 'Learning', 'Ontology', 'Datasets'];


const KProducts = () => {
	function renderProductList() {
		return (
			moclList.map(item => (
				<Item key={item}>
					<ItemText>{item}</ItemText>
				</Item>
			))
		);
	}

	return (
		<Container>
			{renderProductList()}
		</Container>
	)
}

export default KProducts