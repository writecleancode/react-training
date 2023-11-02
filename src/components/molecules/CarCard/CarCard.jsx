import { PropTypes } from 'prop-types';
import { CarName } from 'src/components/atoms/CarName/CarName';
import { CarImg } from 'src/components/atoms/CarImg/CarImg';
import { CarInfoBox } from 'src/components/atoms/CarInfoBox/CarInfoBox';
import { CarInfoWrapper, CarTitleWrapper, Wrapper } from './CarCards.styles';
import { DeleteButton } from 'src/components/atoms/DeleteButton/DeleteButton';

export const CarCard = ({
	deleteCar,
	car: { brand, model, imgUrl, generation, productionStartYear, productionEndYear, facelift },
}) => {
	return (
		<Wrapper>
			<CarTitleWrapper>
				<CarName>{`${brand} ${model}`}</CarName>
				<DeleteButton
					onClick={() => {
						deleteCar(brand);
					}}
				/>
			</CarTitleWrapper>
			<CarImg src={imgUrl} alt={`${brand} ${model} ${generation}`} />
			<CarInfoWrapper>
				<CarInfoBox title={'Generation'} info={generation} />
				<CarInfoBox title={'Production years'} info={`${productionStartYear} - ${productionEndYear}`} />
				<CarInfoBox title={'Facelift'} info={facelift} />
			</CarInfoWrapper>
		</Wrapper>
	);
};

CarCard.propTypes = {
	deleteCar: PropTypes.func,
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
