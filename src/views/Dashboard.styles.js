import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 4rem;
	margin-left: auto;
	margin-right: auto;
	height: calc(100vh - 88px);
	overflow-y: scroll;
`;

export const SearchWrapper = styled.div`
	position: relative;
	margin-bottom: 4rem;
	height: 31px;
`;

export const CarsWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 3.2rem;
`;
