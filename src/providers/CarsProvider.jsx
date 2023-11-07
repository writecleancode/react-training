import { createContext, useEffect, useState } from 'react';
import { cars as primaryCarsData } from 'src/data/cars';

let carsData = [...primaryCarsData];
let valueA;
let valueB;

const initialFormValues = {
	brand: 'Daewoo',
	model: 'Nubira',
	generation: 'I (J100)',
	productionStartYear: 1997,
	productionEndYear: 2003,
	facelift: '1999',
	imgUrl: 'daewoo_nubira_i.jpg',
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

	useEffect(() => {
		setCars(primaryCarsData);
	}, [primaryCarsData]);

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
		carsData = [newCar, ...cars];
		setCars(carsData);
	};

	const handleRemoveCar = (brand, model, generation) => {
		const filteredCars = cars.filter(car => {
			return car.brand !== brand && car.model !== model && car.generation !== generation;
		});
		carsData = filteredCars;
		setCars(carsData);
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

		const sortedCars = carsData.toSorted((a, b) => {
			setSortVariables(selectedValue, a, b);

			if (valueA < valueB) return -1;
			if (valueA > valueB) return 1;

			return 0;
		});

		carsData = sortedCars
		setCars(carsData);
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
