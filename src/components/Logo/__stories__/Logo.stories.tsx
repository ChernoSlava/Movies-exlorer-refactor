/* eslint-disable react/function-component-definition */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Logo } from '../Logo';

export default {
  title: 'Example/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo>  = args => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  arialLabel: 'Ссылка на главную страницу',
  logoAlt: 'Логотип эмблемы',
};
