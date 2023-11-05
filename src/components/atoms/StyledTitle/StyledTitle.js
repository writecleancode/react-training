import styled from 'styled-components';

export const StyledTitle = styled.p`
	margin-bottom: ${({ $isFilterTitle }) => ($isFilterTitle ? '1.6rem' : '0.8rem')};
	color: #3e3e3e;
	font-size: 2rem;
	font-weight: bold;
	line-height: ${({ $isFilterTitle }) => ($isFilterTitle ? '150%' : '100%')};
`;
