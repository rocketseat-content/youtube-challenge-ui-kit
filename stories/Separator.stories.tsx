import React from 'react';
import { storiesOf } from '@storybook/react';

import { Separator } from '../src';

storiesOf('Separator', module).add('Default', () => (
  <div
    style={{
      width: '300px',
      padding: '20px 10px',
      backgroundColor: '#000',
    }}
  >
    <Separator />
  </div>
));
