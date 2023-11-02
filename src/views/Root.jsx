import { GlobalStyle } from 'src/assets/styles/GlobalStyle';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { Wrapper } from './Root.styles';
import { cars } from 'src/data/carsData';
import { CarCard } from 'src/components/molecules/CarCard/CarCard';

export const Root = () => {
	return (
		<>
			<GlobalStyle />
			<StyledTitle>Segment C Hatchback cars (late 1990's, early 2000's)</StyledTitle>
			<Wrapper>
				{cars.map(car => (
					<CarCard key={car.brand} car={car} />
				))}
			</Wrapper>
		</>
	);
};
