import { PropTypes } from 'prop-types';

export const CarName = ({ brand, model }) => (
	<p
		style={{
			gridColumn: '1 / 3',
			marginTop: '0',
			marginBottom: '16px',
			fontSize: '40px',
			fontWeight: 'bold',
		}}>{`${brand} ${model}`}</p>
);

CarName.propTypes = {
	brand: PropTypes.string.isRequired,
	model: PropTypes.string.isRequired,
};
