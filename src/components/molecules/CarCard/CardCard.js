import { PropTypes } from 'prop-types';
import { CarImg } from 'components/atoms/CarImg/CarImg';
import { CarInfoBox } from 'components/atoms/CarInfoBox/CarInfoBox';
import { CarName } from 'components/atoms/CarName/CarName';

const CarInfoColumn = ({ children }) => (
	<div style={{ display: 'flex', flexDirection: 'column', marginLeft: '16px' }}>{children}</div>
);

export const CarCard = ({
	car: { brand, model, imgUrl, generation, productionStartYear, productionEndYear, facelift },
}) => {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateRows: '1fr 240px',
				gridTemplateColumns: '320px 1ft',
				margin: '16px',
				padding: '16px',
				backgroundColor: '#D9D9D9',
			}}>
			<CarName brand={brand} model={model} />
			<CarImg url={imgUrl} />
			<CarInfoColumn>
				<CarInfoBox title={'Generation'} info={generation} />
				<CarInfoBox
					title={'Production years'}
					info={`${productionStartYear} - ${productionEndYear}`}
				/>
				<CarInfoBox title={'Facelift'} info={facelift} />
			</CarInfoColumn>
		</div>
	);
};

CarCard.propTypes = {
	car: PropTypes.shape({
		brand: PropTypes.string.isRequired,
		model: PropTypes.string.isRequired,
		imgUrl: PropTypes.string,
		generation: PropTypes.string.isRequired,
		productionStartYear: PropTypes.number.isRequired,
		productionEndYear: PropTypes.number.isRequired,
		facelift: PropTypes.string.isRequired,
	}),
};
