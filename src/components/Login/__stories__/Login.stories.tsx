/* eslint-disable react/function-component-definition */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { useForm } from '../../../hooks';
import { Logo } from '../../Logo';
import { Login } from '../Login';

export default {
  title: 'Example/Login',
  component: Login,
  argTypes: {
    onClickForNavigate: { action: 'clicked' },
  },
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = args => {
  const { values, errors, handleChange } = useForm();
  return (
    <Login
      {...args}
      values={values}
      errors={errors}
      handleChange={(e) => {
        handleChange(e);
        action('handleChange')(e);
      }}
    />
  );
};

export const Primary = Template.bind({});

Primary.args = {
  handleSubmit: (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    action('handleSubmit')(e);
  },
  logo: (
    <Logo
      arialLabel="Arial-label"
      logoAlt="alt"
      onClick={e => {
        action('onClick')(e);
      }}
    />
  ),
  isLoginProcess: false,
  isDisabled: false,
};
