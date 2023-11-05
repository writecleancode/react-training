import { FormField } from 'src/components/molecules/FormField/FormField';
import { StyledButton } from 'src/components/atoms/StyledButton/StyledButton';
import { Wrapper } from './Form.styles';

export const Form = () => {
	return (
		<Wrapper>
			<FormField label='Brand' name='brand' id='brand' />
			<FormField label='Model' name='model' id='model' />
			<FormField label='Generation' name='generation' id='generation' />
			<FormField label='Start of production (year)' name='productionStartYear' id='productionStartYear' />
			<FormField label='End of production (year)' name='productionEndYear' id='productionEndYear' />
			<FormField label='Year of facelift' name='facelift' id='facelift' />
			<FormField label='Photo url' name='imgUrl' id='imgUrl' />
			<StyledButton>Add car</StyledButton>
		</Wrapper>
	);
};
