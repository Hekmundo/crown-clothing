import React from 'react';
import { FormInputContainer, Input, Label } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  const { id, value } = otherProps;
  return (
    <FormInputContainer>
      <Input onChange={handleChange} {...otherProps} />
      {label ? (
        <Label htmlFor={id} value={value}>
          {label}
        </Label>
      ) : null}
    </FormInputContainer>
  );
};

export default FormInput;
