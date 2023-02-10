import React from 'react';

import { Logo } from '../Logo';

export default {
  title: 'Example/Logo',
  component: Logo,
};

function Template(args) {
  return <Logo {...args} />;
}

export const Primary = Template.bind({});

Primary.args = {
  arialLabel: 'aria-test',
  logoAlt: 'icon'
};
