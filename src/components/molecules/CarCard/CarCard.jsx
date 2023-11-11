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
	car: { brand, model, image, generation, firstYearOfProduction, lastYearOfProduction, facelift },
}) => {
	const { handleRemoveCar } = useContext(CarsContext);

	return (
		<Wrapper>
			<CarName>{`${brand} ${model}`}</CarName>
			<CarImg src={image.url} alt={`${brand} ${model} ${generation}`} />
			<CarInfoWrapper>
				<CarInfoBox title={'Generation'} info={generation} />
				<CarInfoBox title={'Production years'} info={`${firstYearOfProduction} - ${lastYearOfProduction}`} />
				<CarInfoBox title={'Facelift'} info={facelift} />
			</CarInfoWrapper>
			{$isPreviewCard ? null : (
				<DeleteButton onClick={() => handleRemoveCar(brand, model, generation)} aria-label='delete car'>
					<TrashIcon />
				</DeleteButton>
			)}
		</Wrapper>
	);
};

CarCard.propTypes = {
	$isPreviewCard: PropTypes.bool,
	car: PropTypes.shape({
		brand: PropTypes.string.isRequired,
		model: PropTypes.string.isRequired,
		image: PropTypes.shape({
			url: PropTypes.string,
		}),
		generation: PropTypes.string.isRequired,
		firstYearOfProduction: PropTypes.number.isRequired,
		lastYearOfProduction: PropTypes.number.isRequired,
		facelift: PropTypes.string.isRequired,
	}),
};
