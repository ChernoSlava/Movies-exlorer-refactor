/* eslint-disable react/require-default-props */
import React, { useState } from 'react';

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

export const Navigation: React.FC<{
  isShowBurgerMenu: boolean;
  isShowSidebar: boolean;
  sidebarItems: Array<object>;
  desktopItems: Array<object>;
  list: Array<{
    url?: string;
    isProfile?: boolean;
    title?: string;
    icon?: string;
    iconAlt?: string;
    isMini?: boolean;
    isButton?: boolean;
    type?: string;
    isShow?: boolean;
  }>;
  link: React.FC<{
    children: React.ReactElement | string;
    to: string;
  }>;
  navLink: React.FC<{
    children: React.ReactElement | string;
    to: string;
  }>;
  isShow: boolean;
  $isBtn?: boolean;
  $isPprofile?: boolean;
  $isActive?: boolean;
  $isFirst?: boolean;
  $isMini?: boolean;
  $isTop?: boolean;
  $isBottom?: boolean;
}> = ({
  isShowBurgerMenu,
  isShowSidebar,
  sidebarItems,
  desktopItems,
  list,
  link,
  navLink,
}): JSX.Element => {
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
            {desktopItems.map((x: { url: string; isActive: boolean; title: string; }, i: number) => (
              <NavigationLink key={x.url} $isFirst={i === 0} $isActive={x.isActive}>
                <Link to={x.url}>{x.title}</Link>
              </NavigationLink>
            ))}
          </>
        </NavigationDesktopView>
        <NavigationList>
          <>
            {list
              .filter((x) => x.type === 'any' && x.isShow)
              .map((x) => (
                <NavigationLink key={x.url} $isMini={x.isMini} $isBtn={x.isButton}>
                  <Link to={x.url}>{x.title}</Link>
                </NavigationLink>
              ))}
          </>
          <NavigationDesktopView>
            {list
              .filter((x) => x.type === 'desktop' && x.isShow)
              .map((x) => (
                <NavigationLink key={x.url} $isPprofile={x.isProfile}>
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
            type='button'
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
                  .filter((x: { position: string; }) => x.position === 'top')
                  .map((x: { url: string; isActive: any; title: string; }) => (
                    <NavigationSidebarItem key={x.url}>
                      <NavigationSidebarNavLink $isActive={x.isActive} $isTop>
                        <NavLink to={x.url}>{x.title}</NavLink>
                      </NavigationSidebarNavLink>
                    </NavigationSidebarItem>
                  ))}
              </NavigationSidebarContent>
              <NavigationSidebarProfile>
                {sidebarItems
                  .filter((x: { position: string; }) => x.position === 'bottom')
                  .map((x: { url: string; title: string; icon: string | number; iconAlt: string; }) => (
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
