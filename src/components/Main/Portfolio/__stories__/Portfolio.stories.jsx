/* eslint-disable react/function-component-definition */
import React from 'react';

import { Portfolio } from '../Portfolio';

export default {
  title: 'Example/Portfolio',
  component: Portfolio,
};

const Template = args => <Portfolio {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
