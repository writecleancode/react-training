import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { GlobalStyle } from 'src/assets/styles/GlobalStyle';
import { MainTemplate } from 'src/components/templates/MainTemplate';
import { Dashboard } from './Dashboard';
import { AddCar } from './AddCar';
import { CarsProvider } from 'src/providers/CarsProvider';

export const Root = () => {
	return (
		<Router>
			<GlobalStyle />
			<MainTemplate>
				<CarsProvider>
					<Routes>
						<Route path='/' element={<Dashboard />} />
						<Route path='/add-car' element={<AddCar />} />
					</Routes>
				</CarsProvider>
			</MainTemplate>
		</Router>
	);
};
