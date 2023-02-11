/* eslint-disable react/function-component-definition */
import React from 'react';

import { Popup } from '../Popup';

export default {
  title: 'Example/Popup',
  component: Popup,
  isOpen: true,
};

const Template = args => <Popup {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  isOpen: true,
  text: 'Text text',
  isSuccess: true,
};
