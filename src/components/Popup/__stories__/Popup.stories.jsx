/* eslint-disable react/function-component-definition */
import React from 'react';
import { action } from '@storybook/addon-actions';

import { Popup } from '../Popup';

export default {
  title: 'Example/Popup',
  component: Popup,
};

const Template = args => {
  return <Popup {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  isOpen: true,
  text: 'Text text',
  isSuccess: true,
  onClose: e => {
    action('handlePopupIsOpen')(e);
  },
};
