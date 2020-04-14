// @ts-nocheck
import React, { forwardRef } from 'react';

import { Label, Radio, Mark } from './styles';

export interface Props {
  label: string;
  name: string;
  value: any;
  color?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  readOnly?: boolean;
  onChange?: () => void;
}

const RadioWrapper = forwardRef(
  ({ label, name, value, color = '#7159c1', ...props }: Props, ref) => {
    const { readOnly, onChange } = props;

    return (
      <Label
        onClick={readOnly ? () => {} : onChange}
        htmlFor={name}
        color={color}
      >
        {label}

        <Radio {...props} ref={ref} name={name} value={value} />
        <Mark />
      </Label>
    );
  }
);

export { RadioWrapper as Radio };
