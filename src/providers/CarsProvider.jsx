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
	handleSearchCars: () => {},
	handleSortCars: () => {},
});

export const CarsProvider = ({ children }) => {
	const [cars, setCars] = useState([]);
	const [formValues, setFormValues] = useState(initialFormValues);
	let valueA;
	let valueB;

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

	const handleSearchCars = searchPhrase => {
		if (!searchPhrase) {
			setCars(carsData);
			return;
		}

		const matchingCars = carsData.filter(car => {
			const carName = `${car.brand} ${car.model}`;
			return carName.toLowerCase().includes(searchPhrase.toLowerCase());
		});
		setCars(matchingCars);
	};

	const setSortVariables = (selectedValue, a, b) => {
		switch (selectedValue) {
			case 'byAlphabet':
				valueA = `${a.brand.toLowerCase()} ${a.model.toLowerCase()}`;
				valueB = `${b.brand.toLowerCase()} ${b.model.toLowerCase()}`;
				break;
			case 'byAlphabetReverse':
				valueA = `${b.brand.toLowerCase()} ${b.model.toLowerCase()}`;
				valueB = `${a.brand.toLowerCase()} ${a.model.toLowerCase()}`;
				break;
			case 'byYear':
				valueA = a.productionStartYear;
				valueB = b.productionStartYear;
				break;
			case 'byYearReverse':
				valueA = b.productionStartYear;
				valueB = a.productionStartYear;
				break;
			default:
				break;
		}
	};

	const handleSortCars = selectedValue => {
		if (!cars.length) return;

		const sortedCars = cars.toSorted((a, b) => {
			setSortVariables(selectedValue, a, b);

			if (valueA < valueB) return -1;
			if (valueA > valueB) return 1;

			return 0;
		});

		setCars(sortedCars);
	};

	return (
		<CarsContext.Provider
			value={{
				cars: cars,
				formValues: formValues,
				handleInputChange: handleInputChange,
				handleAddCar: handleAddCar,
				handleRemoveCar: handleRemoveCar,
				handleSearchCars: handleSearchCars,
				handleSortCars: handleSortCars,
			}}>
			{children}
		</CarsContext.Provider>
	);
};
