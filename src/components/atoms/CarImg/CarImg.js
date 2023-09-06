import { PropTypes } from 'prop-types';

export const CarImg = ({ url }) => (
	<img src={url} alt='car' style={{ width: '320px', height: '240px', objectFit: 'cover' }} />
);

CarImg.propTypes = {
	url: PropTypes.string.isRequired,
};
