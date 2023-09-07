import { cars } from 'data/carsData';
import { CarCard } from 'components/molecules/CarCard/CarCard';
import { StyledTitle } from 'components/atoms/Title/StyledTitle';
import { Wrapper } from './Root.styles';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<StyledTitle>Segment C Hatchback cars (late 1990's, early 2000's)</StyledTitle>
			<Wrapper>
				{cars.map(car => {
					return <CarCard key={car.brand} car={car} />;
				})}
			</Wrapper>
		</>
	);
};

export default App;
