import { StyledSelect, Wrapper } from './SortSelect.styles';

export const SortSelect = ({ options }) => {
	return (
		<Wrapper>
			<StyledSelect>
				{options.map(opt => (
					<option key={opt}>{opt}</option>
				))}
			</StyledSelect>
		</Wrapper>
	);
};
