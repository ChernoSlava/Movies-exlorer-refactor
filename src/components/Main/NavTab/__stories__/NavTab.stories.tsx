/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { NavTab } from '../NavTab';

export default {
  title: 'Example/NavTab',
  component: NavTab,
} as ComponentMeta<typeof NavTab>;

const Template: ComponentStory<typeof NavTab> = args => <NavTab {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
