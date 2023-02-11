/* eslint-disable react/function-component-definition */
import React from 'react';

import { Footer } from '../Footer';

export default {
  title: 'Example/Footer',
  component: Footer,
};

const Template = args => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
