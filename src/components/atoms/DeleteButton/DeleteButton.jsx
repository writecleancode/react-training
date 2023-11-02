import styled from 'styled-components';

export const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px solid #706a6a;
	border-radius: 100px;
	width: 34px;
	height: 34px;
	background-color: transparent;
	color: #706a6a;
	font-size: 2rem;
	font-weight: bold;
`;

export const DeleteButton = (props) => {
	return <StyledButton {...props}>X</StyledButton>;
};
