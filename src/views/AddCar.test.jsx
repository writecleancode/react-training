import { fireEvent, render, screen } from 'src/test-utils';
import { AddCar } from './AddCar';
import { Dashboard } from './Dashboard';

describe('Add car', () => {
	it('Adds car to the list', async () => {
		render(
			<>
				<AddCar />
				<Dashboard />
			</>
		);
		screen.getByTestId('Brand');
		fireEvent.click(screen.getByText('Add car'));
		await screen.findAllByText(/nubira/i);
	});
});
