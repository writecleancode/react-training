import styled from 'styled-components';

export const SideSection = styled.div`
	grid-row: 2 / 3;
	grid-column: ${({ $isLeft }) => ($isLeft ? '1 / 2' : '3 / 4')};
	padding: 4.8rem 2.4rem;
	${({ $isLeft }) => ($isLeft ? 'border-right: 1px solid #d8d8d8;' : 'border-left: 1px solid #d8d8d8;')}
`;
