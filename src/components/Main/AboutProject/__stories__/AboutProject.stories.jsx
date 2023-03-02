/* eslint-disable react/function-component-definition */
import React from 'react';

import { AboutProject } from '../AboutProject';

export default {
  title: 'Example/AboutProject',
  component: AboutProject,
};

const Template = args => <AboutProject {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
