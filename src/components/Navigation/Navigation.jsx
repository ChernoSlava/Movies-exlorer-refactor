import React, { useState } from 'react';
import PropTypes, { objectOf } from 'prop-types';

import { NAVIGATION } from '../../constants';

// import account from './images/Account.svg';
import {
  NavigationBurgerButton,
  NavigationCloseButton,
  NavigationDesktopView,
  NavigationLink,
  NavigationList,
  // NavigationProfileIcon,
  NavigationSidebar,
  NavigationSidebarContainer,
  NavigationSidebarContent,
  NavigationSidebarItem,
  NavigationSidebarLink,
  NavigationSidebarNavLink,
  NavigationSidebarProfile,
  NavigationStyled,
} from './styled';

export function Navigation({
  isShowBurgerMenu,
  isShowSidebar,
  sidebarItems,
  desktopItems,
  list,
}) {
  const [isSidebarOpen, setSidebarOpenState] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpenState(!isSidebarOpen);
  };

  return (
    <NavigationStyled>
      <NavigationDesktopView>
        <>
          {desktopItems.map((x, i) => (
            <NavigationLink
              key={x.url}
              to={x.url}
              $first={i === 0}
              $active={x.isActive}>
              {x.title}
            </NavigationLink>
          ))}
        </>
      </NavigationDesktopView>
      <NavigationList>
        <>
          {list
            .filter(x => x.type === 'any' && x.isShow)
            .map(x => (
              <NavigationLink
                key={x.url}
                to={x.url}
                $mini={x.isMini}
                $btn={x.isButton}>
                {x.title}
              </NavigationLink>
            ))}
        </>
        {
          <NavigationDesktopView>
            {list
              .filter(x => x.type === 'desktop' && x.isShow)
              .map(x => (
                <NavigationLink key={x.url} to={x.url} $profile={x.isProfile}>
                  {x.title}
                </NavigationLink>
              ))}
            {/* <NavigationLink to={ROUTER_PATH.PROFILE} $profile>
              Аккаунт
              <NavigationProfileIcon
                src={account}
                alt={NAVIGATION.ICO_ACCOUNT_ALT}
              />
            </NavigationLink> */}
          </NavigationDesktopView>
        }
      </NavigationList>
      {isShowBurgerMenu && (
        <NavigationBurgerButton
          type={NAVIGATION.BURGER_BTN_TYPE}
          aria-label={NAVIGATION.ARIA_LABEL_BTN_BURGER}
          onClick={handleToggleSidebar}
        />
      )}
      {isShowSidebar && (
        <NavigationSidebar isShow={isSidebarOpen}>
          <NavigationSidebarContainer>
            <NavigationCloseButton onClick={handleToggleSidebar} />
            <NavigationSidebarContent>
              {sidebarItems
                .filter(x => x.isTop)
                .map(x => (
                  <NavigationSidebarItem key={x.url}>
                    <NavigationSidebarNavLink
                      to={x.url}
                      $active={x.isActive}
                      $isTop>
                      {x.title}
                    </NavigationSidebarNavLink>
                  </NavigationSidebarItem>
                ))}
            </NavigationSidebarContent>
            <NavigationSidebarProfile>
              {sidebarItems
                .filter(x => x.isBottom)
                .map(x => (
                  <NavigationSidebarLink to={x.url} key={x.url} $isBottom>
                    {x.title}
                    {/* <NavigationProfileIcon
                  src={account}
                  alt={NAVIGATION.ICO_ACCOUNT_ALT}
                /> */}
                  </NavigationSidebarLink>
                ))}
            </NavigationSidebarProfile>
          </NavigationSidebarContainer>
        </NavigationSidebar>
      )}
    </NavigationStyled>
  );
}

Navigation.propTypes = {
  isShowBurgerMenu: PropTypes.bool.isRequired,
  isShowSidebar: PropTypes.bool.isRequired,
  sidebarItems: PropTypes.arrayOf(objectOf).isRequired,
  desktopItems: PropTypes.arrayOf(objectOf).isRequired,
  list: PropTypes.arrayOf(objectOf).isRequired,
  // sidebarItems: PropTypes.shape({
  //   url: PropTypes.string.isRequired,
  //   isActive: PropTypes.bool.isRequired,
  //   title: PropTypes.string.isRequired,
  //   isTop: PropTypes.bool,
  //   isBottom: PropTypes.bool,
  //   filter: PropTypes.func.isRequired,
  //   map: PropTypes.func.isRequired,
  // }).isRequired,
  // desktopItems: PropTypes.shape({
  //   url: PropTypes.string.isRequired,
  //   isActive: PropTypes.bool.isRequired,
  //   title: PropTypes.string.isRequired,
  //   map: PropTypes.func.isRequired,
  // }).isRequired,
  // list: PropTypes.shape({
  //   url: PropTypes.string.isRequired,
  //   isShow: PropTypes.bool.isRequired,
  //   type: PropTypes.string.isRequired,
  //   isMini: PropTypes.bool,
  //   isButton: PropTypes.bool,
  //   isProfile: PropTypes.bool,
  //   filter: PropTypes.func.isRequired,
  //   map: PropTypes.func.isRequired,
  // }).isRequired,
};
