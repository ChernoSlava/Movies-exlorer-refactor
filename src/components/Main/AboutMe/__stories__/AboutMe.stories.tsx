/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AboutMe } from '../AboutMe';

export default {
  title: 'Example/AboutMe',
  component: AboutMe,
} as ComponentMeta<typeof AboutMe>;

const Template: ComponentStory<typeof AboutMe> = args => <AboutMe {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
