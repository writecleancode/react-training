import { fireEvent, render, screen } from 'src/test-utils';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { MainTemplate } from 'src/components/templates/MainTemplate';
import { Dashboard } from './Dashboard';

describe('Dashboard', () => {
	it('Renders the component', () => {
		render(<Dashboard />);
		screen.getByPlaceholderText('find car');
		screen.getByText('Volkswagen Golf');
	});

	it('Displays only matching cars is searchPhrase is present', () => {
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
		screen.getByText('1997');
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
		screen.getByText('Alfa Romeo 146');

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
