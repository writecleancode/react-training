import PropTypes from 'prop-types';
import { SearchIcon } from 'src/assets/icons/SearchIcon';
import { IconBox, Input, Wrapper } from './SearchInput.styles';

export const SearchInput = ({ value, onChange }) => {
	return (
		<Wrapper>
			<Input name='search' id='search' placeholder='find car' value={value} onChange={onChange} />
			<IconBox>
				<SearchIcon />
			</IconBox>
		</Wrapper>
	);
};

SearchInput.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
};
