import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 7.2rem;
`;

export const FilterItems = styled.ul`
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	margin: -0.8rem;
`;

export const FilterItem = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0.8rem;
	padding: 0 1.6rem;
	height: 27px;
	min-width: ${({ $isYears }) => ($isYears ? '72px' : 'unset')};
	background-color: #d9d9d9;
	font-size: 1.6rem;
	cursor: pointer;

	&.active {
		background-color: #bdeeb1;
	}
`;
