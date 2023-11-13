import { useContext } from 'react';
import { CarsContext } from 'src/providers/CarsProvider';
import { PropTypes } from 'prop-types';
import { CarName } from 'src/components/atoms/CarName/CarName';
import { CarImg } from 'src/components/atoms/CarImg/CarImg';
import { CarInfoBox } from 'src/components/atoms/CarInfoBox/CarInfoBox';
import { TrashIcon } from 'src/assets/icons/TrashIcon';
import { CarInfoWrapper, DeleteButton, Wrapper } from './CarCards.styles';

export const CarCard = ({
	$isPreviewCard,
	car: { id = '', brand, model, imgUrl, generation, productionStartYear, productionEndYear, facelift },
}) => {
	const { handleRemoveCar } = useContext(CarsContext);

	return (
		<Wrapper>
			<CarName>{`${brand} ${model}`}</CarName>
			<CarImg src={imgUrl} alt={`${brand} ${model} ${generation}`} />
			<CarInfoWrapper>
				<CarInfoBox title={'Generation'} info={generation} />
				<CarInfoBox title={'Production years'} info={`${productionStartYear} - ${productionEndYear}`} />
				<CarInfoBox title={'Facelift'} info={facelift} />
			</CarInfoWrapper>
			{$isPreviewCard ? null : (
				<DeleteButton onClick={() => handleRemoveCar(id)} aria-label='delete car'>
					<TrashIcon />
				</DeleteButton>
			)}
		</Wrapper>
	);
};

CarCard.propTypes = {
	$isPreviewCard: PropTypes.bool,
	car: PropTypes.shape({
		id: PropTypes.string,
		brand: PropTypes.string.isRequired,
		model: PropTypes.string.isRequired,
		imgUrl: PropTypes.string,
		generation: PropTypes.string.isRequired,
		productionStartYear: PropTypes.number.isRequired,
		productionEndYear: PropTypes.number.isRequired,
		facelift: PropTypes.string.isRequired,
	}),
};
