import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Modal, Button } from '../src';

storiesOf('Modal', module).add('Test Modal', () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>

      <Modal title="Modal Title" open={open} setOpen={setOpen}>
        Test
      </Modal>
    </>
  );
});
