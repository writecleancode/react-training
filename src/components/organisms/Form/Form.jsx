import { useContext } from 'react';
import { CarsContext } from 'src/providers/CarsProvider';
import { FormField } from 'src/components/molecules/FormField/FormField';
import { StyledButton } from 'src/components/atoms/StyledButton/StyledButton';
import { Wrapper } from './Form.styles';

export const Form = () => {
	const { formValues, handleInputChange, handleAddCar } = useContext(CarsContext);

	const handleSubmitForm = e => {
		e.preventDefault();
		handleAddCar();
	};

	return (
		<Wrapper onSubmit={handleSubmitForm}>
			<FormField label='Brand' name='brand' id='brand' value={formValues.brand} onChange={handleInputChange} />
			<FormField label='Model' name='model' id='model' value={formValues.model} onChange={handleInputChange} />
			<FormField label='Generation' name='generation' id='generation' value={formValues.generation} onChange={handleInputChange} />
			<FormField label='Start of production (year)' name='firstYearOfProduction' id='firstYearOfProduction' value={formValues.firstYearOfProduction} onChange={handleInputChange} type='number'
			/>
			<FormField label='End of production (year)' name='lastYearOfProduction' id='lastYearOfProduction' value={formValues.lastYearOfProduction} onChange={handleInputChange} type='number'
			/>
			<FormField label='Year of facelift' name='facelift' id='facelift' value={formValues.facelift} onChange={handleInputChange} />
			<FormField label='Photo url' name='imageUrl' id='imageUrl' value={formValues.image.url} onChange={handleInputChange} />
			<StyledButton type='submit'>Add car</StyledButton>
		</Wrapper>
	);
};
