import PropTypes from 'prop-types';
import { StyledInput } from 'src/components/atoms/StyledInput/StyledInput';
import { StyledLabel } from 'src/components/atoms/StyledLabel/StyledLabel';
import { Wrapper } from './FormField.styles';

export const FormField = ({ value, onChange, label, name, id, type = 'text' }) => {
	return (
		<Wrapper>
			<StyledLabel htmlFor={name}>{label}</StyledLabel>
			<StyledInput value={value} onChange={onChange} name={name} id={id} type={type} />
		</Wrapper>
	);
};

FormField.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string,
};
