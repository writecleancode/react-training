import { useEffect, useState } from 'react';
import { GlobalStyle } from 'src/assets/styles/GlobalStyle';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { Wrapper } from './Root.styles';
import { cars as carsData } from 'src/data/carsData';
import { CarCard } from 'src/components/molecules/CarCard/CarCard';

export const Root = () => {
	const [cars, setCars] = useState([]);

	useEffect(() => {
		setCars(carsData);
	}, []);

	const deleteCar = (brand) => {
		const filteredCars = cars.filter(car => car.brand !== brand)
		setCars(filteredCars);
	}

	return (
		<>
			<GlobalStyle />
			<StyledTitle>Segment C Hatchback cars (late 1990's, early 2000's)</StyledTitle>
			<Wrapper>
				{cars.map(car => (
					<CarCard key={car.brand} car={car} deleteCar={deleteCar} />
				))}
			</Wrapper>
		</>
	);
};
