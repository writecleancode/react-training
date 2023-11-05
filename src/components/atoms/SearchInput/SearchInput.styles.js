import styled from 'styled-components';

export const Wrapper = styled.div`
	position: absolute;
	left: 50%;
	translate: -50%;
	display: flex;
	background-color: #f6f6f6;
`;

export const Input = styled.input`
	padding: 0.8rem 1.6rem;
	border: none;
	border-right: 1px solid #ccc;
	min-width: 300px;
	background-color: #f6f6f6;
`;

export const IconBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.8rem;
	background-color: #f6f6f6;

	svg {
		width: 1.6;
		height: 1.6;
		fill: #464646;
	}
`;
