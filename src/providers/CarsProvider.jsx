import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

let carsData = [];
let searchResultCars;
let filterResultsCars;
let valueA;
let valueB;
let filterYearsOptions = [];
let filterBrandsOptions = [];

const initialFormValues = {
	id: Math.round(Math.random() * 100000),
	brand: 'Daewoo',
	model: 'Nubira',
	generation: 'I (J100)',
	firstYearOfProduction: 1997,
	lastYearOfProduction: 2003,
	facelift: '1999',
	image: {
		url: 'https://www.datocms-assets.com/112049/1699699918-daewoo_nubira_i.jpg',
	},
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

export const query = `
{
  allCars {
    id
    brand
    model
    generation
    firstYearOfProduction
    lastYearOfProduction
    facelift
    image {
      url
    }
  }
}
`;

export const CarsProvider = ({ children }) => {
	const [cars, setCars] = useState([]);
	const [formValues, setFormValues] = useState(initialFormValues);

	useEffect(() => {
		axios
			.post(
				'https://graphql.datocms.com/',
				{
					query: query,
				},
				{
					headers: {
						authorization: `Bearer ${import.meta.env.VITE_DATO_TOKEN}`,
					},
				}
			)
			.then(({ data: { data } }) => {
				setCars(data.allCars);
				carsData = data.allCars;
			})
			.catch(err => console.log(err));
	}, []);

	const handleInputChange = e => {
		if (e.target.name === 'firstYearOfProduction' || e.target.name === 'lastYearOfProduction') {
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

	const handleRemoveCar = (brand, model, generation) => {
		const filteredCars = carsData.filter(car => {
			return car.brand !== brand && car.model !== model && car.generation !== generation;
		});
		carsData = filteredCars;

		if (searchResultCars) {
			const filteredCars = searchResultCars.filter(car => {
				return car.brand !== brand && car.model !== model && car.generation !== generation;
			});
			setCars(filteredCars);
			return;
		} else if (filterResultsCars) {
			const filteredCars = filterResultsCars.filter(car => {
				return car.brand !== brand && car.model !== model && car.generation !== generation;
			});
			setCars(filteredCars);
			return;
		} else {
			setCars(carsData);
		}
	};

	const searchCars = (searchPhrase, carsToSearchThrough) => {
		const matchingCars = carsToSearchThrough.filter(car => {
			const carName = `${car.brand} ${car.model}`;
			return carName.toLowerCase().includes(searchPhrase.toLowerCase());
		});
		setCars(matchingCars);
		searchResultCars = matchingCars;
	};

	const handleSearchCars = searchPhrase => {
		if (!searchPhrase) {
			filterResultsCars ? setCars(filterResultsCars) : setCars(carsData);
			searchResultCars = null;
			return;
		}

		if (!filterResultsCars) {
			searchCars(searchPhrase, carsData);
			return;
		} else {
			searchCars(searchPhrase, filterResultsCars);
		}
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
				valueA = a.firstYearOfProduction;
				valueB = b.firstYearOfProduction;
				break;
			case 'byYearReverse':
				valueA = b.firstYearOfProduction;
				valueB = a.firstYearOfProduction;
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

		carsData = sortedCars;
		setCars(carsData);
	};

	const filterCars = carsToFilter => {
		const matchingCars = carsToFilter.filter(carToCheck => {
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
				if (carToCheck.firstYearOfProduction <= year && carToCheck.lastYearOfProduction >= year) {
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
		setCars(matchingCars);
		filterResultsCars = matchingCars;
	};

	const handleFiterCars = () => {
		if (!filterYearsOptions.length && !filterBrandsOptions.length) {
			searchResultCars ? setCars(searchResultCars) : setCars(carsData);
			filterResultsCars = null;
			return;
		}

		if (!searchResultCars) {
			filterCars(carsData);
			return;
		} else {
			filterCars(searchResultCars);
		}
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
