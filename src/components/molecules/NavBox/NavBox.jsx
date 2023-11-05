import { StyledLink, Wrapper } from './NavBox.styles';

export const NavBox = () => {
	return (
		<Wrapper>
			<StyledLink to='/'>Dashboard</StyledLink>
			<StyledLink to='/add-car'>Add car</StyledLink>
		</Wrapper>
	);
};
