import { Header } from '../atoms/Header/Header';
import { filterBrands, filterYears } from 'src/data/FilterData';
import { SideSection } from '../organisms/SideSection/SideSection';
import { FilterBox } from '../molecules/FilterBox/FilterBox';
import { NavBox } from '../molecules/NavBox/NavBox';
import { Wrapper } from './MainTemplate.styles';

export const MainTemplate = ({ children }) => {
	return (
		<Wrapper>
			<Header />
			<SideSection $isLeft>
				<FilterBox title='Choose production year(s):' options={filterYears} $isYears />
				<FilterBox title='Choose brand:' options={filterBrands} />
			</SideSection>
			{children}
			<SideSection>
				<NavBox />
			</SideSection>
		</Wrapper>
	);
};
