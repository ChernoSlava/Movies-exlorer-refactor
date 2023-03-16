import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { Navigation } from '../../components';
import { NAVIGATION, ROUTER_PATH } from '../../constants';
import { AuthContext } from '../../contexts';

export const NavigationContainer:React.FC = ():JSX.Element => {
  const location = useLocation();
  const { loggedIn } = useContext(AuthContext);

  const isShowMoviesPage = location.pathname === ROUTER_PATH.MOVIES;
  const isShowSavedMoviesPage = location.pathname === ROUTER_PATH.SAVED_MOVIES;
  const isShowMainPage = location.pathname === ROUTER_PATH.MAIN;

  return (
    <Navigation
      link={Link}
      navLink={NavLink}
      sidebarItems={[
        {
          url: ROUTER_PATH.MAIN,
          isActive: isShowMainPage,
          title: 'Главная',
          position: 'top',
        },
        {
          url: ROUTER_PATH.MOVIES,
          isActive: isShowMoviesPage,
          title: 'Фильмы',
          position: 'top',
        },
        {
          url: ROUTER_PATH.SAVED_MOVIES,
          isActive: isShowSavedMoviesPage,
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
      isShowBurgerMenu={loggedIn}
      isShowSidebar={loggedIn}
      desktopItems={
        loggedIn
          ? [
              {
                url: ROUTER_PATH.MOVIES,
                isActive: isShowMoviesPage,
                title: 'Фильмы',
              },
              {
                url: ROUTER_PATH.SAVED_MOVIES,
                isActive: isShowSavedMoviesPage,
                title: 'Сохранённые фильмы',
              },
            ]
          : []
      }
      list={[
        {
          url: ROUTER_PATH.REGISTER,
          title: 'Регистрация',
          isShow: !loggedIn,
          type: 'any',
          isMini: true,
        },
        {
          url: ROUTER_PATH.LOGIN,
          title: 'Войти',
          isShow: !loggedIn,
          type: 'any',
          isMini: true,
          isButton: true,
        },
        {
          url: ROUTER_PATH.PROFILE,
          title: 'Аккаунт',
          isShow: loggedIn,
          type: 'desktop',
          isProfile: true,
          icon: 'AccountIcon',
          iconAlt: NAVIGATION.ICO_ACCOUNT_ALT,
        },
      ]}
    />
  );
}
