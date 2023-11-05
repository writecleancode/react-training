import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { cars as carsData } from 'src/data/carsData';
import { GlobalStyle } from 'src/assets/styles/GlobalStyle';
import { MainTemplate } from 'src/components/templates/MainTemplate';
import { Dashboard } from './Dashboard';
import { AddCar } from './AddCar';

export const Root = () => {
	const [cars, setCars] = useState([]);

	useEffect(() => {
		setCars(carsData);
	}, [carsData]);

	return (
		<Router>
			<GlobalStyle />
			<MainTemplate>
				<Routes>
					<Route path='/' element={<Dashboard cars={cars} />} />
					<Route path='/add-car' element={<AddCar />} />
				</Routes>
			</MainTemplate>
		</Router>
	);
};
