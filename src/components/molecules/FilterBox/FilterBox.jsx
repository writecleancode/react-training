import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { FilterItem, FilterItems, Wrapper } from './FilterBox.styles';

export const FilterBox = ({ title, options, $isYears }) => {
	return (
		<Wrapper>
			<StyledTitle $isFilterTitle>{title}</StyledTitle>
			<FilterItems>
				{options.map(option => (
					<FilterItem key={option} $isYears={$isYears}>
						{option}
					</FilterItem>
				))}
			</FilterItems>
		</Wrapper>
	);
};
