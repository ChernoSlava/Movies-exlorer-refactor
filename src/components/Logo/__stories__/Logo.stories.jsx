/* eslint-disable react/function-component-definition */
import React from 'react';

import { Logo } from '../Logo';

export default {
  title: 'Example/Logo',
  component: Logo,
};

const Template = args => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  arialLabel: 'Ссылка на главную страницу',
  logoAlt: 'Логотип эмблемы',
};
