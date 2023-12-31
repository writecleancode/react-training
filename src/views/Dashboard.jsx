import { useContext, useEffect, useState } from 'react';
import { CarsContext } from 'src/providers/CarsProvider';
import { selectOptions } from 'src/data/select';
import { CarCard } from 'src/components/molecules/CarCard/CarCard';
import { SearchInput } from 'src/components/atoms/SearchInput/SearchInput';
import { SortSelect } from 'src/components/atoms/SortSelect/SortSelect';
import { CarsWrapper, SearchWrapper, Wrapper } from './Dashboard.styles';

export const Dashboard = () => {
	const { cars, handleSearchCars } = useContext(CarsContext);
	const [searchPhrase, setSearchPhrase] = useState('');

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
					<CarCard key={car.id} car={car} />
				))}
			</CarsWrapper>
		</Wrapper>
	);
};
