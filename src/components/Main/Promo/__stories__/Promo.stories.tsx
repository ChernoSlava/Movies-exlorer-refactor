/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Promo } from '../Promo';

export default {
  title: 'Example/Promo',
  component: Promo,
} as ComponentMeta<typeof Promo>;

const Template: ComponentStory<typeof Promo> = args => <Promo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
