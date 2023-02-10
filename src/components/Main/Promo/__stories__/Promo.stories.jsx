/* eslint-disable react/function-component-definition */
import React from 'react';

import { Promo } from '../Promo';

export default {
  title: 'Example/Promo',
  component: Promo,
};

const Template = args => <Promo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
