import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const StyledLink = styled(NavLink)`
	position: relative;
	margin-bottom: 0.8rem;
	padding: 0.4rem 0.8rem;
	color: #3e3e3e;
	font-size: 2rem;
	font-weight: bold;
	text-decoration: none;
	opacity: 0.7;
	transition: opacity 0.3s;

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		translate: 0 -50%;
		left: -24px;
		width: 24px;
		height: 3px;
		background-color: #767676;
		opacity: 0.4;
		transition: opacity 0.3s;
	}

	&.active {
		opacity: 1;

		&::before {
			opacity: 1;
		}
	}
`;
