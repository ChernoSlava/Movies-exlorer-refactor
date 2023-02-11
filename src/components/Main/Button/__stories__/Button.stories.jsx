/* eslint-disable react/function-component-definition */
import React from 'react';

import { Button } from '../Button';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  link: '#',
  title: 'Проверка',
};
