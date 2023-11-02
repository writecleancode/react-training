import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-rows: 1fr 240px;
	grid-template-columns: 320px 1fr;
	margin: 16px;
	padding: 16px;
	background-color: #d9d9d9;
`;

export const CarInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 16px;
`;

export const CarTitleWrapper = styled.div`
	grid-column: 1 / 3;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;
