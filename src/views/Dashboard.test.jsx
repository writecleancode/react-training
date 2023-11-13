import { fireEvent, render, screen } from 'src/test-utils';
import { beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { query } from 'src/providers/CarsProvider';
import { BrowserRouter } from 'react-router-dom';
import { MainTemplate } from 'src/components/templates/MainTemplate';
import { Dashboard } from './Dashboard';

const mock = new MockAdapter(axios);

describe('Dashboard', () => {
	beforeEach(() => {
		mock
			.onPost('https://graphql.datocms.com/', {
				query: query,
			})
			.reply(200, {
				data: {
					allCars: [
						{
							id: '1',
							brand: 'Alfa Romeo',
							model: '146',
							generation: 'I (Type 930)',
							firstYearOfProduction: 1994,
							lastYearOfProduction: 2000,
							facelift: '1999',
							image: {
								url: 'https://www.datocms-assets.com/112049/1699786166-alfa_romeo_146_i.png',
							},
						},
						{
							id: '2',
							brand: 'Ford',
							model: 'Focus',
							generation: 'I (C170)',
							firstYearOfProduction: 1998,
							lastYearOfProduction: 2005,
							facelift: '2001',
							image: {
								url: 'https://www.datocms-assets.com/112049/1699699930-ford_focus_i.jpg',
							},
						},
						{
							id: '3',
							brand: 'Volkswagen',
							model: 'Golf',
							generation: 'IV (1J)',
							firstYearOfProduction: 1997,
							lastYearOfProduction: 2003,
							facelift: '-',
							image: {
								url: 'https://www.datocms-assets.com/112049/1699699980-volkswagen_golf_iv.jpg',
							},
						},
					],
				},
			});
	});

	it('Renders the component', async () => {
		render(<Dashboard />);
		screen.getByPlaceholderText('find car');
		await screen.findByText('Volkswagen Golf');
	});

	it('Displays only matching cars is searchPhrase is present', async () => {
		render(<Dashboard />);
		const absentCar = screen.getByText('Ford Focus');
		const presentCar = screen.getByText('Volkswagen Golf');
		fireEvent.change(screen.getByPlaceholderText('find car'), { target: { value: 'vo' } });
		expect(absentCar).not.toBeInTheDocument();
		expect(presentCar).toBeInTheDocument();
	});

	it('Displays only matching cars if production years filters are matching', () => {
		render(
			<BrowserRouter>
				<MainTemplate>
					<Dashboard />
				</MainTemplate>
			</BrowserRouter>
		);
		const absentCar = screen.getByText('Ford Focus');
		const presentCar = screen.getByText('Volkswagen Golf');
		screen.getByTestId('1997');
		fireEvent.click(screen.getByTestId('1997'));
		expect(absentCar).not.toBeInTheDocument();
		expect(presentCar).toBeInTheDocument();
	});

	it('Displays only matching cars if brand filters are matching', () => {
		render(
			<BrowserRouter>
				<MainTemplate>
					<Dashboard />
				</MainTemplate>
			</BrowserRouter>
		);
		const absentCar = screen.getByText('Ford Focus');
		const presentCar = screen.getByText('Volkswagen Golf');
		fireEvent.click(screen.getByTestId('Volkswagen'));
		fireEvent.click(screen.getByTestId('Alfa Romeo'));
		expect(absentCar).not.toBeInTheDocument();
		expect(presentCar).toBeInTheDocument();
		screen.getByText('Alfa Romeo 146')

		fireEvent.click(screen.getByTestId('Volkswagen'));
		fireEvent.click(screen.getByTestId('Alfa Romeo'));
	});

	it('Displays only cars matching search phrase, years filters and brand filters', () => {
		render(
			<BrowserRouter>
				<MainTemplate>
					<Dashboard />
				</MainTemplate>
			</BrowserRouter>
		);
		const absentCar = screen.getByText('Ford Focus');
		const presentCar = screen.getByText('Volkswagen Golf');
		fireEvent.click(screen.getByTestId('1997'));
		fireEvent.click(screen.getByTestId('Volkswagen'));
		fireEvent.change(screen.getByPlaceholderText('find car'), { target: { value: 'go' } });
		expect(absentCar).not.toBeInTheDocument();
		expect(presentCar).toBeInTheDocument();

		fireEvent.click(screen.getByTestId('Volkswagen'));
	});

	it('Removes car from the list', () => {
		render(<Dashboard />);
		const absentCar = screen.getByText('Ford Focus');
		const presentCar = screen.getByText('Volkswagen Golf');
		const searchInput = screen.getByPlaceholderText('find car');
		fireEvent.change(searchInput, { target: { value: 'focus' } });
		expect(absentCar).toBeInTheDocument();
		expect(presentCar).not.toBeInTheDocument();
		fireEvent.click(screen.getByLabelText('delete car'));
		fireEvent.change(searchInput, { target: { value: '' } });
		expect(absentCar).not.toBeInTheDocument();
		screen.getByText('Volkswagen Golf');
	});
});
