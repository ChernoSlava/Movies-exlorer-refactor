/* eslint-disable react/function-component-definition */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { useForm } from '../../../hooks';
import { SearchForm } from '../SearchForm';

export default {
  title: 'Example/SearchForm',
  component: SearchForm,
  argTypes: {
    onSaveFilm: { action: 'clicked' },
    onDeleteFilm: { action: 'clicked' },
  },
} as ComponentMeta<typeof SearchForm>;

const Template: ComponentStory<typeof SearchForm> = args => {
  const { values, handleChange } = useForm();
  return (
    <div
      style={{
        height: '500px',
        display: 'flex',
        alignItems: 'center',
      }}>
      <SearchForm
        {...args}
        handleChange={e => {
          handleChange(e);
          action('handleChange')(e);
        }}
        values={values}
      />
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  errorText: true,
  onSubmit: (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    action('handleSubmit')(e);
  },
  shortMovies: false,
  handleShortMovies: (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    action('handleShortMovies')(e);
  },
};
