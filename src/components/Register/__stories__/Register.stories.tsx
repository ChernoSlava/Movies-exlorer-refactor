/* eslint-disable react/function-component-definition */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';


import { useForm } from '../../../hooks';
import { Logo } from '../../Logo';
import { Register } from '../Register';

export default {
  title: 'Example/Register',
  component: Register,
  argTypes: {
    onClickForNavigate: { action: 'clicked' },
  },
} as ComponentMeta<typeof Register>;

const Template: ComponentStory<typeof Register> = args => {
  const { values, errors, handleChange } = useForm();
  return (
    <Register
      {...args}
      values={values}
      errors={errors}
      handleChange={e => {
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
  isRegisterProcess: false,
  isDisabled: false,
};
