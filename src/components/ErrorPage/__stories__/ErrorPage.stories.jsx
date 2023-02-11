/* eslint-disable react/function-component-definition */
import React from 'react';

import { ErrorPage } from '../ErrorPage';

export default {
  title: 'Example/ErrorPage',
  component: ErrorPage,
};

const Template = args => <ErrorPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
