import { Form } from 'src/components/organisms/Form/Form';
import { CarCard } from 'src/components/molecules/CarCard/CarCard';
import { PreviewTitle, PreviewWrapper, Wrapper } from './AddCar.styles';

export const AddCar = () => {
	return (
		<Wrapper>
			<Form />
			<PreviewWrapper>
				<PreviewTitle>Live preview</PreviewTitle>
				<CarCard
					car={{
						brand: 'Alfa Romeo',
						model: '146',
						generation: 'I (Type 930)',
						productionStartYear: 1994,
						productionEndYear: 2000,
						facelift: '1999',
						imgUrl: 'src/data/img/alfa_romeo_146_i.jpg',
					}}
				/>
			</PreviewWrapper>
		</Wrapper>
	);
};
