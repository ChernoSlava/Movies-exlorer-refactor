import React, { useState } from 'react';
import PropTypes, { objectOf } from 'prop-types';

import { NAVIGATION } from './constants';
import * as Images from './images';
import {
  NavigationBurgerButton,
  NavigationCloseButton,
  NavigationDesktopView,
  NavigationLink,
  NavigationList,
  NavigationProfileIcon,
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
  link,
  navLink,
}) {
  const [isSidebarOpen, setSidebarOpenState] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpenState(!isSidebarOpen);
  };
  const Link = link;
  const NavLink = navLink;
  return (
    <NavigationStyled>
      <NavigationDesktopView>
        <>
          {desktopItems.map((x, i) => (
            <NavigationLink key={x.url} $first={i === 0} $active={x.isActive}>
              <Link to={x.url}>{x.title}</Link>
            </NavigationLink>
          ))}
        </>
      </NavigationDesktopView>
      <NavigationList>
        <>
          {list
            .filter(x => x.type === 'any' && x.isShow)
            .map(x => (
              <NavigationLink key={x.url} $mini={x.isMini} $btn={x.isButton}>
                <Link to={x.url}>{x.title}</Link>
              </NavigationLink>
            ))}
        </>
        <NavigationDesktopView>
          {list
            .filter(x => x.type === 'desktop' && x.isShow)
            .map(x => (
              <NavigationLink key={x.url} $profile={x.isProfile}>
                <Link to={x.url}>{x.title}</Link>
                {Images[x.icon] && (
                  <NavigationProfileIcon src={Images[x.icon]} alt={x.iconAlt} />
                )}
              </NavigationLink>
            ))}
        </NavigationDesktopView>
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
                .filter(x => x.position === 'top')
                .map(x => (
                  <NavigationSidebarItem key={x.url}>
                    <NavigationSidebarNavLink $active={x.isActive} $isTop>
                      <NavLink to={x.url}>{x.title}</NavLink>
                    </NavigationSidebarNavLink>
                  </NavigationSidebarItem>
                ))}
            </NavigationSidebarContent>
            <NavigationSidebarProfile>
              {sidebarItems
                .filter(x => x.position === 'bottom')
                .map(x => (
                  <NavigationSidebarLink key={x.url} $isBottom>
                    <Link to={x.url}>{x.title}</Link>
                    {Images[x.icon] && (
                      <NavigationProfileIcon
                        src={Images[x.icon]}
                        alt={x.iconAlt}
                      />
                    )}
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
  navLink: PropTypes.object.isRequired,
  link: PropTypes.object.isRequired,
};
