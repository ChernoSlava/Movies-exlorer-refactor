/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import React from 'react';

// import { action } from '@storybook/addon-actions';
import { NAVIGATION, ROUTER_PATH } from '../../../constants';
import { Navigation } from '../Navigation';

export default {
  title: 'Example/Navigation',
  component: Navigation,
};
const Link = ({ children, to }) => <a href={to}>{children}</a>;
const Template = args => {
  return (
    <Navigation
      {...args}
      sidebarItems={[
        {
          url: ROUTER_PATH.MAIN,
          isActive: true,
          title: 'Главная',
          position: 'top',
        },
        {
          url: ROUTER_PATH.MOVIES,
          isActive: false,
          title: 'Фильмы',
          position: 'top',
        },
        {
          url: ROUTER_PATH.SAVED_MOVIES,
          isActive: false,
          title: 'Сохранённые фильмы',
          position: 'top',
        },
        {
          url: ROUTER_PATH.PROFILE,
          title: 'Аккаунт',
          position: 'bottom',
          icon: 'AccountIcon',
          iconAlt: NAVIGATION.ICO_ACCOUNT_ALT,
        },
      ]}
      desktopItems={[
        {
          url: ROUTER_PATH.MOVIES,
          isActive: true,
          title: 'Фильмы',
        },
        {
          url: ROUTER_PATH.SAVED_MOVIES,
          isActive: false,
          title: 'Сохранённые фильмы',
        },
      ]}
      list={[
        {
          url: ROUTER_PATH.REGISTER,
          title: 'Регистрация',
          isShow: false,
          type: 'any',
          isMini: true,
        },
        {
          url: ROUTER_PATH.LOGIN,
          title: 'Войти',
          isShow: false,
          type: 'any',
          isMini: true,
          isButton: true,
        },
        {
          url: ROUTER_PATH.PROFILE,
          title: 'Аккаунт',
          isShow: true,
          type: 'desktop',
          isProfile: true,
          icon: 'AccountIcon',
          iconAlt: NAVIGATION.ICO_ACCOUNT_ALT,
        },
      ]}
      link={Link}
      navLink={Link}
    />
  );
};

export const Primary = Template.bind({});

Primary.args = {
  isShowBurgerMenu: true,
  isShowSidebar: false,
};
