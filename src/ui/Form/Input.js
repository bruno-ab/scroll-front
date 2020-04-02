import React from 'react';
import { Field } from 'react-final-form';
// import { Text } from 'react-native';

import theme from '../../themes/default';
import styled from 'styled-components/native';

export const StyedInput = styled.TextInput`
  border-radius: ${theme.input.borderRadius};
  background-color: ${theme.input.backgroundColor};
  color: ${theme.input.color};
  padding: 10px;
  width: 300px;
  height: 35px;
  margin-bottom: 20px;
`;


const Input = ({ name, placeholder, type }) => {
  const inputColor = theme.input.color;

  return (
    <Field name={name}>
      {props => (
        <StyedInput
          secureTextEntry={type === 'password'}
          placeholderTextColor={inputColor}
          type={type}
          placeholder={placeholder}
          name={props.input.name}
          value={props.input.value}
          onChange={props.input.onChange}
        />
      )}
    </Field>
  );
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
