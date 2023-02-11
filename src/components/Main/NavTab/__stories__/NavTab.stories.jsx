/* eslint-disable react/function-component-definition */
import React from 'react';

import { NavTab } from '../NavTab';

export default {
  title: 'Example/NavTab',
  component: NavTab,
};

const Template = args => <NavTab {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
