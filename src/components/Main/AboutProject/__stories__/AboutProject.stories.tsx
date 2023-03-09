/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AboutProject } from '../AboutProject';

export default {
  title: 'Example/AboutProject',
  component: AboutProject,
} as ComponentMeta<typeof AboutProject>;

const Template: ComponentStory<typeof AboutProject> = args => <AboutProject {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
