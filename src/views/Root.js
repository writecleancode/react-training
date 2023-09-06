import { cars } from 'data/carsData';
import { CarCard } from 'components/molecules/CarCard/CardCard';
import { Title } from 'components/atoms/Title/Title';

const Wrapper = ({ children }) => (
	<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>{children}</div>
);

const App = () => {
	return (
		<>
			<Title>Segment C Hatchback cars (late 1990's, early 2000's)</Title>
			<Wrapper>
				{cars.map(car => {
					return <CarCard key={car.brand} car={car} />;
				})}
			</Wrapper>
		</>
	);
};

export default App;
