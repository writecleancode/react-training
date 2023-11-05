import { StyledInput } from 'src/components/atoms/StyledInput/StyledInput';
import { StyledLabel } from 'src/components/atoms/StyledLabel/StyledLabel';
import { Wrapper } from './FormField.styles';

export const FormField = ({ label, name, id, type = 'text' }) => {
	return (
		<Wrapper>
			<StyledLabel htmlFor={name}>{label}</StyledLabel>
			<StyledInput name={name} id={id} type={type} />
		</Wrapper>
	);
};
