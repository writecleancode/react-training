import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

let carsData = [];
let foundCars = [];
let filteredCars = [];
let valueA;
let valueB;
let filterYearsOptions = [];
let filterBrandsOptions = [];

const initialFormValues = {
	brand: 'Daewoo',
	model: 'Nubira',
	generation: 'I (J100)',
	productionStartYear: 1997,
	productionEndYear: 2003,
	facelift: '1999',
	imgUrl: 'https://www.datocms-assets.com/112049/1699699918-daewoo_nubira_i.jpg',
};

export const CarsContext = createContext({
	cars: [],
	formValues: {},
	handleInputChange: () => {},
	handleAddCar: () => {},
	handleRemoveCar: () => {},
	handleSearchCars: () => {},
	handleSortCars: () => {},
	handleFilterParameters: () => {},
});

export const CarsProvider = ({ children }) => {
	const [cars, setCars] = useState([]);
	const [formValues, setFormValues] = useState(initialFormValues);

	useEffect(() => {
		axios
			.get('/cars')
			.then(({ data }) => {
				setCars(data.cars);
				carsData = data.cars;
				foundCars = data.cars;
				filteredCars = data.cars;
			})
			.catch(err => console.log(err));
	}, []);

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
		const newCar = formValues;
		carsData = [newCar, ...cars];
		setCars(carsData);
	};

	const removeCar = (brand, model, generation, carsToSearchThrough) => {
		const filteredCars = carsToSearchThrough.filter(car => {
			return car.brand !== brand && car.model !== model && car.generation !== generation;
		});
		return filteredCars;
	};

	const handleRemoveCar = (brand, model, generation) => {
		carsData = removeCar(brand, model, generation, carsData);
		filteredCars = removeCar(brand, model, generation, filteredCars);
		handleFiterCars();
	};

	const handleDisplayCars = () => {
		const matchingCars = foundCars.filter(foundCar => {
			for (let i = 0; i < filteredCars.length; i++) {
				const filteredCar = filteredCars[i];
				if (foundCar.id === filteredCar.id) {
					return true;
				}
			}
		});
		setCars(matchingCars);
	};

	const handleSearchCars = searchPhrase => {
		if (!searchPhrase) {
			foundCars = carsData;
		} else {
			carsData.filter(() => {
				const matchingCars = carsData.filter(car => {
					const carName = `${car.brand} ${car.model}`;
					return carName.toLowerCase().includes(searchPhrase.toLowerCase());
				});
				foundCars = matchingCars;
			});
		}
		handleDisplayCars();
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

	const sortCars = (selectedValue, carsToSort) => {
		carsToSort.sort((a, b) => {
			setSortVariables(selectedValue, a, b);

			if (valueA < valueB) return -1;
			if (valueA > valueB) return 1;

			return 0;
		});
	};

	const handleSortCars = selectedValue => {
		if (!carsData.length) return;

		sortCars(selectedValue, carsData);
		if (carsData.length === foundCars.length && carsData.length === filteredCars.length) {
			handleDisplayCars();
			return;
		}
		sortCars(selectedValue, foundCars);
		handleDisplayCars();
	};

	const handleFiterCars = () => {
		if (!filterYearsOptions.length && !filterBrandsOptions.length) {
			filteredCars = carsData;
		} else {
			const matchingCars = carsData.filter(carToCheck => {
				let conditionResults = [];
				let statement;

				for (let i = 0; i < filterBrandsOptions.length; i++) {
					const brand = filterBrandsOptions[i];
					if (carToCheck.brand === brand) {
						conditionResults.push(true);
					} else {
						conditionResults.push(false);
					}
				}

				for (let i = 0; i < filterYearsOptions.length; i++) {
					const year = filterYearsOptions[i];
					if (carToCheck.productionStartYear <= year && carToCheck.productionEndYear >= year) {
						conditionResults.push(true);
					} else {
						conditionResults.push(false);
					}
				}

				if (conditionResults.length === filterYearsOptions.length + filterBrandsOptions.length) {
					statement = conditionResults.every(item => item === true);
				}
				return statement;
			});
			filteredCars = matchingCars;
		}
		handleDisplayCars();
	};

	const handleFilterParameters = filterOption => {
		if (typeof filterOption === 'number') {
			if (filterYearsOptions.includes(filterOption)) {
				filterYearsOptions = filterYearsOptions.filter(option => option !== filterOption);
			} else {
				filterYearsOptions.push(filterOption);
			}
		} else if (typeof filterOption === 'string') {
			if (filterBrandsOptions.includes(filterOption)) {
				filterBrandsOptions = filterBrandsOptions.filter(option => option !== filterOption);
			} else {
				filterBrandsOptions.push(filterOption);
			}
		}
		handleFiterCars();
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
				handleFilterParameters: handleFilterParameters,
			}}>
			{children}
		</CarsContext.Provider>
	);
};
