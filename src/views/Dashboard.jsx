import { useContext } from 'react';
import { CarsContext } from 'src/providers/CarsProvider';
import { selectOptions } from 'src/data/FilterData';
import { CarCard } from 'src/components/molecules/CarCard/CarCard';
import { SearchInput } from 'src/components/atoms/SearchInput/SearchInput';
import { SortSelect } from 'src/components/atoms/SortSelect/SortSelect';
import { CarsWrapper, SearchWrapper, Wrapper } from './Dashboard.styles';

export const Dashboard = () => {
	const { cars } = useContext(CarsContext);

	return (
		<Wrapper>
			<SearchWrapper>
				<SearchInput />
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
