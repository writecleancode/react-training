import { useContext } from 'react';
import { CarsContext } from 'src/providers/CarsProvider';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { FilterItem, FilterItems, Wrapper } from './FilterBox.styles';

export const FilterBox = ({ title, options, $isYears }) => {
	const { handleFilterCars } = useContext(CarsContext);

	const handleActiveClass = option => {
		const filterItem = document.querySelector(`[data-content='${option}']`);
		filterItem.classList.toggle('active');
		handleFilterCars(option);
	};

	return (
		<Wrapper>
			<StyledTitle $isFilterTitle>{title}</StyledTitle>
			<FilterItems>
				{options.map(option => (
					<FilterItem key={option} $isYears={$isYears} onClick={() => handleActiveClass(option)} data-content={option}>
						{option}
					</FilterItem>
				))}
			</FilterItems>
		</Wrapper>
	);
};
