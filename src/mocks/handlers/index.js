import { HttpResponse, http } from 'msw';
import { cars as carsData } from 'src/mocks/data/cars';
import { v4 as uuid } from 'uuid';
import { filterBrands, filterYears } from 'src/mocks/data/filters';
import { selectOptions } from 'src/mocks/data/select';

let cars = carsData;

export const handlers = [
	http.get('/cars', () => {
		return HttpResponse.json({
			cars: cars,
		});
	}),

	http.get('/filters', () => {
		return HttpResponse.json({
			filters: {
				productionYears: filterYears,
				brands: filterBrands,
			},
		});
	}),

	http.get('/select-options', () => {
		return HttpResponse.json({
			options: selectOptions,
		});
	}),

	http.post('/cars/add-car', async ({ request }) => {
		const { addedCar } = await request.json();
		const newCar = {
			id: uuid(),
			...addedCar,
		};
		cars = [newCar, ...cars];
		return HttpResponse.json({
            cars: cars
        });
	}),
];
