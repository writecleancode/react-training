import styled from 'styled-components';
import { StyledButton } from 'src/components/atoms/StyledButton/StyledButton';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 16px;
	border: 1px solid #dddddd;
	background-color: #f1f1f1;
	color: #3e3e3e;
	box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
`;

export const CarInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1.6rem;
`;

export const DeleteButton = styled(StyledButton)`
	display: flex;
	justify-content: center;
	align-items: center;
	content: '';
	position: absolute;
	bottom: 1.6rem;
	right: 1.6rem;
	padding: 0.4rem 0.6rem;
	fill: #fff;
	transition: fill .3s;

	&:hover {
		fill: #555;
	}
`;
