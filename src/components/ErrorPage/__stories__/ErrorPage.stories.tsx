/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ErrorPage } from '../ErrorPage';

export default {
  title: 'Example/ErrorPage',
  component: ErrorPage,
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = args => <ErrorPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
