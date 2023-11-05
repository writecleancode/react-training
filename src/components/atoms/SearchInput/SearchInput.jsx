import { SearchIcon } from 'src/assets/icons/SearchIcon';
import { IconBox, Input, Wrapper } from './SearchInput.styles';

export const SearchInput = () => {
	return (
		<Wrapper>
			<Input name='search' id='search' placeholder='find car' />
			<IconBox>
				<SearchIcon />
			</IconBox>
		</Wrapper>
	);
};
