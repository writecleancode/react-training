import { Form } from 'src/components/organisms/Form/Form';
import { CarCard } from 'src/components/molecules/CarCard/CarCard';
import { PreviewTitle, PreviewWrapper, Wrapper } from './AddCar.styles';

export const AddCar = ({ formValues, handleInputChange, handleAddCar }) => {
	return (
		<Wrapper>
			<Form formValues={formValues} handleInputChange={handleInputChange} handleAddCar={handleAddCar} />
			<PreviewWrapper>
				<PreviewTitle>Live preview</PreviewTitle>
				<CarCard
					car={{
						...formValues,
						imgUrl: `src/data/img/${formValues.imgUrl}`,
					}} $isPreviewCard
				/>
			</PreviewWrapper>
		</Wrapper>
	);
};
