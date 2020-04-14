import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { CheckBox } from '../src';

storiesOf('CheckBox', module)
  .add('CheckBox Group', () => {
    const allOptions = [
      { id: 1, value: 'Alpha' },
      { id: 2, value: 'Beta' },
    ];

    const [options, setOptions] = useState([allOptions[1].id]);

    function toggleOption(id: number) {
      setOptions(
        options.includes(id)
          ? options.filter((option) => option !== id)
          : [...options, id]
      );
    }

    return (
      <form>
        {allOptions.map((item) => (
          <CheckBox
            name="checkbox"
            key={item.id}
            label={item.value}
            value={item.value}
            checked={options.includes(item.id)}
            onChange={() => toggleOption(item.id)}
          />
        ))}
      </form>
    );
  })
  .add('Checked Box', () => (
    <CheckBox
      name="checkbox"
      label="Checked"
      value="Checked"
      defaultChecked={true}
      readOnly
    />
  ))
  .add('Unchecked Box', () => (
    <CheckBox
      name="checkbox"
      label="Unchecked"
      value="Unchecked"
      checked={false}
      readOnly
    />
  ));
