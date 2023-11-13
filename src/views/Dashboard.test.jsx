import { fireEvent, render, screen } from 'src/test-utils';
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { handlers } from 'src/mocks/handlers';
import { BrowserRouter } from 'react-router-dom';
import { MainTemplate } from 'src/components/templates/MainTemplate';
import { Dashboard } from './Dashboard';

const server = setupServer(...handlers);

describe('Dashboard', () => {
	beforeAll(() => {
		server.listen();
	});
	afterEach(() => {
		server.resetHandlers();
	});
	afterAll(() => {
		server.close();
	});

	it('Renders the component', async () => {
		render(<Dashboard />);
		screen.getByPlaceholderText('find car');
		await screen.findByText('Volkswagen Golf');
	});

	it('Displays only matching cars is searchPhrase is present', () => {
		render(<Dashboard />);
		const absentCar = screen.getByText('Ford Focus');
		const presentCar = screen.getByText('Volkswagen Golf');
		fireEvent.change(screen.getByPlaceholderText('find car'), { target: { value: 'vo' } });
		expect(absentCar).not.toBeInTheDocument();
		expect(presentCar).toBeInTheDocument();
	});

	it('Displays only matching cars if production years filters are matching', async () => {
		render(
			<BrowserRouter>
				<MainTemplate>
					<Dashboard />
				</MainTemplate>
			</BrowserRouter>
		);
		const absentCar = screen.getByText('Ford Focus');
		const presentCar = screen.getByText('Volkswagen Golf');
		await screen.findByTestId('1997');
		fireEvent.click(screen.getByTestId('1997'));
		expect(absentCar).not.toBeInTheDocument();
		expect(presentCar).toBeInTheDocument();

		fireEvent.click(screen.getByTestId('1997'));
	});

	it('Displays only matching cars if brand filters are matching', async () => {
		render(
			<BrowserRouter>
				<MainTemplate>
					<Dashboard />
				</MainTemplate>
			</BrowserRouter>
		);
		const absentCar = screen.getByText('Ford Focus');
		const presentCar = screen.getByText('Volkswagen Golf');
		await screen.findByTestId('Volkswagen');
		fireEvent.click(screen.getByTestId('Volkswagen'));
		expect(absentCar).not.toBeInTheDocument();
		expect(presentCar).toBeInTheDocument();

		fireEvent.click(screen.getByTestId('Volkswagen'));
	});

	it('Displays only cars matching search phrase, years filters and brand filters', async () => {
		render(
			<BrowserRouter>
				<MainTemplate>
					<Dashboard />
				</MainTemplate>
			</BrowserRouter>
		);
		const absentCar = screen.getByText('Ford Focus');
		const presentCar = screen.getByText('Volkswagen Golf');
		await screen.findByTestId('1997');
		await screen.findByTestId('Volkswagen');
		fireEvent.click(screen.getByTestId('1997'));
		fireEvent.click(screen.getByTestId('Volkswagen'));
		fireEvent.change(screen.getByPlaceholderText('find car'), { target: { value: 'go' } });
		expect(absentCar).not.toBeInTheDocument();
		expect(presentCar).toBeInTheDocument();

		fireEvent.click(screen.getByTestId('1997'));
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
