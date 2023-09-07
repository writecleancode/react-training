import { PropTypes } from 'prop-types';
import { StyledInfo, StyledTitle, Wrapper } from './CarInfoBox.styles';

export const CarInfoBox = ({ title, info }) => (
	<Wrapper>
		<StyledTitle>{title}</StyledTitle>
		<StyledInfo>{info}</StyledInfo>
	</Wrapper>
);

CarInfoBox.propTypes = {
	title: PropTypes.string.isRequired,
	info: PropTypes.string.isRequired,
};
