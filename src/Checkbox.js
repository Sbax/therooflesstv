import React from 'react';
import styled from 'styled-components';
import { fontFamily, theme } from './theme/theme';
import { v4 as uuidv4 } from 'uuid';

const Label = styled.label`
  padding-left: 1.5rem;

  display: inline-flex;
  align-items: center;
`;

const Text = styled.span`
  cursor: pointer;
  position: relative;

  font-family: ${fontFamily.serif};
  font-size: 1.2rem;

  &:before {
    position: absolute;
    top: -3px;
    left: -1.5rem;
    content: '';

    width: 2px;
    height: 2px;
    color: ${theme.offBlack};
    box-shadow: 2px 2px, 4px 2px, 6px 2px, 8px 2px, 10px 2px, 12px 2px, 14px 2px,
      16px 2px, 2px 4px, 16px 4px, 2px 6px, 16px 6px, 2px 8px, 16px 8px,
      2px 10px, 16px 10px, 2px 12px, 16px 12px, 2px 14px, 16px 14px, 2px 16px,
      4px 16px, 6px 16px, 8px 16px, 10px 16px, 12px 16px, 14px 16px, 16px 16px;
  }
`;

const Input = styled.input`
  appearance: none;

  &:checked + ${Text}:before {
    box-shadow: 2px 2px, 4px 2px, 6px 2px, 8px 2px, 10px 2px, 12px 2px, 14px 2px,
      18px 2px, 20px 2px, 2px 4px, 16px 4px, 18px 4px, 20px 4px, 2px 6px,
      14px 6px, 16px 6px, 2px 8px, 4px 8px, 12px 8px, 14px 8px, 2px 10px,
      4px 10px, 6px 10px, 10px 10px, 12px 10px, 16px 10px, 2px 12px, 6px 12px,
      8px 12px, 10px 12px, 16px 12px, 2px 14px, 8px 14px, 16px 14px, 2px 16px,
      4px 16px, 6px 16px, 8px 16px, 10px 16px, 12px 16px, 14px 16px, 16px 16px;
  }
`;

const Checkbox = ({ children, onChange, checked = false }) => {
  const uuid = uuidv4();
  return (
    <Label htmlFor={uuid}>
      <Input
        type="checkbox"
        onChange={({ target }) => onChange(target.checked)}
        checked={checked}
        id={uuid}
      />
      <Text>{children}</Text>
    </Label>
  );
};

export default Checkbox;
