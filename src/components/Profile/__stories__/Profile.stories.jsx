/* eslint-disable react/function-component-definition */
import React from 'react';
import { action } from '@storybook/addon-actions';

import { useForm } from '../../../hooks';
import { Profile } from '../Profile';

export default {
  title: 'Example/Profile',
  component: Profile,
};

const Template = args => {
  const { values, errors, handleChange } = useForm({});
  return (
    <Profile
      {...args}
      values={values}
      errors={errors}
      handleChange={e => {
        handleChange(e);
        action('handleChange')(e);
      }}
      onSignOut={e => {
        action('onSignOut')(e);
      }}
    />
  );
};

export const Primary = Template.bind({});

Primary.args = {
  header: <h1>Header</h1>,
  isInutErrorName: false,
  isInutErrorEmail: false,
  name: 'Slava',
  handleSubmit: e => {
    e.preventDefault();
    action('handleSubmit')(e);
  },
};
