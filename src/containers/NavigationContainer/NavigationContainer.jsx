import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { Navigation } from '../../components';
import { ROUTER_PATH } from '../../constants';
import { AuthContext } from '../../contexts';

export function NavigationContainer() {
  const location = useLocation();
  const { loggedIn } = useContext(AuthContext);

  const isShowMoviesPage = location.pathname === ROUTER_PATH.MOVIES;
  const isShowSavedMoviesPage = location.pathname === ROUTER_PATH.SAVED_MOVIES;
  const isShowMainPage = location.pathname === ROUTER_PATH.MAIN;

  return (
    <Navigation
      sidebarItems={[
        {
          url: ROUTER_PATH.MAIN,
          isActive: isShowMainPage,
          title: 'Главная',
          isTop: true,
        },
        {
          url: ROUTER_PATH.MOVIES,
          isActive: isShowMoviesPage,
          title: 'Фильмы',
          isTop: true,
        },
        {
          url: ROUTER_PATH.SAVED_MOVIES,
          isActive: isShowSavedMoviesPage,
          title: 'Сохранённые фильмы',
          isTop: true,
        },
        {
          url: ROUTER_PATH.PROFILE,
          title: 'Аккаунт',
          isBottom: true,
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
        },
      ]}
    />
  );
}

// <NavigationStyled>
//       <NavigationDesktopView>
//         {loggedIn && (
//           <>
//             <NavigationLink
//               to={ROUTER_PATH.MOVIES}
//               $first
//               $active={isShowMoviesPage}>
//               Фильмы
//             </NavigationLink>
//             <NavigationLink
//               to={ROUTER_PATH.SAVED_MOVIES}
//               $active={isShowSavedMoviesPage}>
//               Сохранённые фильмы
//             </NavigationLink>
//           </>
//         )}
//       </NavigationDesktopView>
//       <NavigationList>
//         {!loggedIn && (
//           <>
//             <NavigationLink to={ROUTER_PATH.REGISTER} $mini>
//               Регистрация
//             </NavigationLink>

//             <NavigationLink to={ROUTER_PATH.LOGIN} $mini $btn>
//               Войти
//             </NavigationLink>
//           </>
//         )}
//         {loggedIn && (
//           <NavigationDesktopView>
//             <NavigationLink to={ROUTER_PATH.PROFILE} $profile>
//               Аккаунт
//               <NavigationProfileIcon
//                 src={account}
//                 alt={NAVIGATION.ICO_ACCOUNT_ALT}
//               />
//             </NavigationLink>
//           </NavigationDesktopView>
//         )}
//       </NavigationList>
//       {loggedIn && (
//         <NavigationBurgerButton
//           type={NAVIGATION.BURGER_BTN_TYPE}
//           aria-label={NAVIGATION.ARIA_LABEL_BTN_BURGER}
//           onClick={handleToggleSidebar}
//         />
//       )}
//       {loggedIn && (
//         <NavigationSidebar isShow={isSidebarOpen}>
//           <NavigationSidebarContainer>
//             <NavigationCloseButton onClick={handleToggleSidebar} />
//             <NavigationSidebardMenu>
//               <NavigationSidebardList>
//                 <NavigationSidebarNavLink
//                   to={ROUTER_PATH.MAIN}
//                   $active={isShowMainPage}>
//                   Главная
//                 </NavigationSidebarNavLink>
//               </NavigationSidebardList>
//               <NavigationSidebardList>
//                 <NavigationSidebarNavLink
//                   to={ROUTER_PATH.MOVIES}
//                   $active={isShowMoviesPage}>
//                   Фильмы
//                 </NavigationSidebarNavLink>
//               </NavigationSidebardList>
//               <NavigationSidebardList>
//                 <NavigationSidebarNavLink
//                   to={ROUTER_PATH.SAVED_MOVIES}
//                   $active={isShowSavedMoviesPage}>
//                   Сохранённые фильмы
//                 </NavigationSidebarNavLink>
//               </NavigationSidebardList>
//             </NavigationSidebardMenu>
//             <NavigationSidebarProfile>
//               <NavigationSidebarLink to={ROUTER_PATH.PROFILE}>
//                 Аккаунт
//                 <NavigationProfileIcon
//                   src={account}
//                   alt={NAVIGATION.ICO_ACCOUNT_ALT}
//                 />
//               </NavigationSidebarLink>
//             </NavigationSidebarProfile>
//           </NavigationSidebarContainer>
//         </NavigationSidebar>
//       )}
//     </NavigationStyled>
