import styled from 'styled-components';
import { StyledTitle } from 'src/components/atoms/CarInfoBox/CarInfoBox.styles';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(100vh - 88px);
`;

export const PreviewWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 12.8rem;
`;

export const PreviewTitle = styled(StyledTitle)`
	margin-bottom: 2.4rem;
	color: #3e3e3e;
	font-size: 2.4rem;
`;
