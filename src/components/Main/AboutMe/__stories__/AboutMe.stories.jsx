/* eslint-disable react/function-component-definition */
import React from 'react';

import { AboutMe } from '../AboutMe';

export default {
  title: 'Example/AboutMe',
  component: AboutMe,
};

const Template = args => <AboutMe {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
