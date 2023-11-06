import { FormField } from 'src/components/molecules/FormField/FormField';
import { StyledButton } from 'src/components/atoms/StyledButton/StyledButton';
import { Wrapper } from './Form.styles';

export const Form = ({ formValues, handleInputChange, handleAddCar }) => {
	const handleSubmitForm = e => {
		e.preventDefault();
		handleAddCar();
	};
	
	return (
		<Wrapper onSubmit={handleSubmitForm}>
			<FormField label='Brand' name='brand' id='brand' value={formValues.brand} onChange={handleInputChange} />
			<FormField label='Model' name='model' id='model' value={formValues.model} onChange={handleInputChange} />
			<FormField label='Generation' name='generation' id='generation' value={formValues.generation} onChange={handleInputChange} />
			<FormField label='Start of production (year)' name='productionStartYear' id='productionStartYear' value={formValues.productionStartYear} onChange={handleInputChange} type='number' />
			<FormField label='End of production (year)' name='productionEndYear' id='productionEndYear' value={formValues.productionEndYear} onChange={handleInputChange} type='number' />
			<FormField label='Year of facelift' name='facelift' id='facelift' value={formValues.facelift} onChange={handleInputChange} />
			<FormField label='Photo url' name='imgUrl' id='imgUrl' value={formValues.imgUrl} onChange={handleInputChange} />
			<StyledButton type='submit'>Add car</StyledButton>
		</Wrapper>
	);
};
