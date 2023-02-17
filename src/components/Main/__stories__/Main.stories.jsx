/* eslint-disable react/function-component-definition */
import React from 'react';

import { Header } from '../../Header';
import { Logo } from '../../Logo';
import { Main } from '../Main';

export default {
  title: 'Example/Main',
  component: Main,
};

const Template = args => (
  <div
    style={{
      backgroundColor: 'black',
      height: '100%',
    }}>
    <Main {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  header: (
    <Header>
      <Logo arialLabel="kek" logoAlt="kek" onClick={() => {}} />
    </Header>
  ),
};
