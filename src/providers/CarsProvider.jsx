import { createContext, useEffect, useState } from 'react';
import { cars as carsData } from 'src/data/carsData';

const initialFormValues = {
	brand: 'Alfa Romeo',
	model: '146',
	generation: 'I (Type 930)',
	productionStartYear: 1994,
	productionEndYear: 2000,
	facelift: '1999',
	imgUrl: 'alfa_romeo_146_i.jpg',
};

export const CarsContext = createContext({
	cars: [],
	formValues: {},
	handleInputChange: () => {},
	handleAddCar: () => {},
	handleRemoveCar: () => {},
});

export const CarsProvider = ({ children }) => {
	const [cars, setCars] = useState([]);
	const [formValues, setFormValues] = useState(initialFormValues);

	useEffect(() => {
		setCars(carsData);
	}, [carsData]);

	const handleInputChange = e => {
		if (e.target.name === 'productionStartYear' || e.target.name === 'productionEndYear') {
			setFormValues({
				...formValues,
				[e.target.name]: Number(e.target.value),
			});
		} else {
			setFormValues({
				...formValues,
				[e.target.name]: e.target.value,
			});
		}
	};

	const handleAddCar = () => {
		const newCar = {
			...formValues,
			imgUrl: `src/data/img/${formValues.imgUrl}`,
		};
		setCars([newCar, ...cars]);
	};

	const handleRemoveCar = (brand, model, generation) => {
		const filteredCars = cars.filter(car => {
			return car.brand !== brand && car.model !== model && car.generation !== generation;
		});
		setCars(filteredCars);
	};

	return (
		<CarsContext.Provider
			value={{
				cars: cars,
				formValues: formValues,
				handleInputChange: handleInputChange,
				handleAddCar: handleAddCar,
				handleRemoveCar: handleRemoveCar,
			}}>
			{children}
		</CarsContext.Provider>
	);
};
