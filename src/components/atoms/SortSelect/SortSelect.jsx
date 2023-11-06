import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledSelect, Wrapper } from './SortSelect.styles';
import { CarsContext } from 'src/providers/CarsProvider';

export const SortSelect = ({ options }) => {
	const [selectedValue, setSelectedValue] = useState(options[0].value);
	const { handleSortCars } = useContext(CarsContext);

	useEffect(() => {
		handleSortCars(selectedValue);
	}, [selectedValue]);

	return (
		<Wrapper>
			<StyledSelect value={selectedValue} onChange={e => setSelectedValue(e.target.value)}>
				{options.map(({ value, text }) => (
					<option key={value} value={value}>
						{text}
					</option>
				))}
			</StyledSelect>
		</Wrapper>
	);
};

SortSelect.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string,
			text: PropTypes.string,
		})
	),
};
