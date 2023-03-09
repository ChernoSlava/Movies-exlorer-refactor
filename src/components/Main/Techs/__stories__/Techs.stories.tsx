/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Techs } from '../Techs';

export default {
  title: 'Example/Techs',
  component: Techs,
} as ComponentMeta<typeof Techs>;

const Template: ComponentStory<typeof Techs> = args => <Techs {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
