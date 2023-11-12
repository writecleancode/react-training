import { HttpResponse, http } from 'msw';
import { cars } from 'src/mocks/data/cars';
import { filterBrands, filterYears } from 'src/mocks/data/filters';
import { selectOptions } from 'src/mocks/data/select';

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
];
