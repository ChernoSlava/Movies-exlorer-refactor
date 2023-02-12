/* eslint-disable react/function-component-definition */
import React from 'react';

import { Logo } from '../../Logo';
import { Login } from '../Login';

export default {
  title: 'Example/Login',
  component: Login,
  argTypes: {
    handleSubmit: { action: 'clicked' },
    handleChange: { action: 'clicked' },
    onClickForNavigate: { action: 'clicked' },
  },
};

const Template = args => <Login {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  handleSubmit: e => e.preventDefault(),
  logo: <Logo arialLabel="Arial-label" logoAlt="alt" onClick={() => {}} />,
  isLoginProcess: false,
  isDisabled: false,
  values: { email: 'dada' },
  errors: {},
};
