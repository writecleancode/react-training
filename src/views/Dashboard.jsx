import { useContext, useEffect, useState } from 'react';
import { CarsContext } from 'src/providers/CarsProvider';
import { CarCard } from 'src/components/molecules/CarCard/CarCard';
import { SearchInput } from 'src/components/atoms/SearchInput/SearchInput';
import { SortSelect } from 'src/components/atoms/SortSelect/SortSelect';
import { CarsWrapper, SearchWrapper, Wrapper } from './Dashboard.styles';
import axios from 'axios';

export const Dashboard = () => {
	const { cars, handleSearchCars } = useContext(CarsContext);
	const [selectOptions, setSelectOptions] = useState([{ value: '', text: '' }]);
	const [searchPhrase, setSearchPhrase] = useState('');

	useEffect(() => {
		axios
			.get('/select-options')
			.then(({ data }) => setSelectOptions(data.options))
			.catch(err => console.log(err));
	}, []);

	useEffect(() => {
		handleSearchCars(searchPhrase);
	}, [searchPhrase]);

	return (
		<Wrapper>
			<SearchWrapper>
				<SearchInput value={searchPhrase} onChange={e => setSearchPhrase(e.target.value)} />
				<SortSelect options={selectOptions} />
			</SearchWrapper>
			<CarsWrapper>
				{cars.map(car => (
					<CarCard key={car.brand + car.model} car={car} />
				))}
			</CarsWrapper>
		</Wrapper>
	);
};
