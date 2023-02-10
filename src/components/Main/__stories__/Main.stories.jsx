/* eslint-disable react/function-component-definition */
import React from 'react';

import { Main } from '../Main';

export default {
  title: 'Example/Main',
  component: Main,
};

const Template = args => <Main {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
