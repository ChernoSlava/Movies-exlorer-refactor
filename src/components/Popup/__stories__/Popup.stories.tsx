/* eslint-disable react/function-component-definition */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Popup } from '../Popup';

export default {
  title: 'Example/Popup',
  component: Popup,
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = args => {
  return <Popup {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  isOpen: true,
  text: 'Text text',
  isSuccess: true,
  onClose: (e: any) => {
    action('handlePopupIsOpen')(e);
  },
};
