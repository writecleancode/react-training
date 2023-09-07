import { PropTypes } from 'prop-types';
import { CarImg } from 'components/atoms/CarImg/CarImg';
import { CarInfoBox } from 'components/atoms/CarInfoBox/CarInfoBox';
import { CarName } from 'components/atoms/CarName/CarName';
import { CarInfoWrapper, Wrapper } from './CarCards.styles';

export const CarCard = ({
	car: { brand, model, imgUrl, generation, productionStartYear, productionEndYear, facelift },
}) => {
	return (
		<Wrapper>
			<CarName>{`${brand} ${model}`}</CarName>
			<CarImg src={imgUrl} alt={`${brand} ${model} ${generation}`} />
			<CarInfoWrapper>
				<CarInfoBox title={'Generation'} info={generation} />
				<CarInfoBox
					title={'Production years'}
					info={`${productionStartYear} - ${productionEndYear}`}
				/>
				<CarInfoBox title={'Facelift'} info={facelift} />
			</CarInfoWrapper>
		</Wrapper>
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
