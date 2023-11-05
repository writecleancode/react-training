import styled from 'styled-components';

export const Wrapper = styled.div`
	grid-row: 1 / 2;
	grid-column: 1 / 4;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid #e4e4e4;
	background-image: linear-gradient(-45deg, rgb(248, 248, 248), rgba(243, 243, 243, 0.48), rgb(248, 248, 248));
`;

export const StyledTitle = styled.h1`
	padding: 2.4rem;
	color: #3e3e3e;
	font-size: 3.2rem;
	font-weight: bold;
	text-align: center;
`;
