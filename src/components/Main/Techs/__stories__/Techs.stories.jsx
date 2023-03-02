/* eslint-disable react/function-component-definition */
import React from 'react';

import { Techs } from '../Techs';

export default {
  title: 'Example/Techs',
  component: Techs,
};

const Template = args => <Techs {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
