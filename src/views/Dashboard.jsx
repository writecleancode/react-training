import PropTypes from 'prop-types';
import { selectOptions } from 'src/data/FilterData';
import { CarCard } from 'src/components/molecules/CarCard/CarCard';
import { SearchInput } from 'src/components/atoms/SearchInput/SearchInput';
import { SortSelect } from 'src/components/atoms/SortSelect/SortSelect';
import { CarsWrapper, SearchWrapper, Wrapper } from './Dashboard.styles';

export const Dashboard = ({ cars }) => {
	return (
		<Wrapper>
			<SearchWrapper>
				<SearchInput />
				<SortSelect options={selectOptions} />
			</SearchWrapper>
			<CarsWrapper>
				{cars.map(car => (
					<CarCard key={car.brand} car={car} />
				))}
			</CarsWrapper>
		</Wrapper>
	);
};

Dashboard.propTypes = {
	cars: PropTypes.array,
};
