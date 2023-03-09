/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Portfolio } from '../Portfolio';

export default {
  title: 'Example/Portfolio',
  component: Portfolio,
} as ComponentMeta<typeof Portfolio>;

const Template: ComponentStory<typeof Portfolio> = args => <Portfolio {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
