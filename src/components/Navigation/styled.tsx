import styled from 'styled-components/macro';

import burgerBtn from './images/burger-menu.svg';
import closeBtn from './images/CloseIcon.svg';

export const NavigationStyled = styled.nav`
  display: flex;
`;
export const NavigationDesktopView = styled.div`
  margin: 0;
  align-self: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavigationLink = styled.span<{
  $isBtn?: boolean;
  $isPprofile?: boolean;
  $isActive?: boolean;
  $isFirst?: boolean;
  $isMini?: boolean;
}>`
  > a {
    text-decoration: none;
    color: ${props => props.theme.colors.white10};

    ${props =>
      props.$isBtn &&
      `
          color: ${props.theme.colors.black30};
      `}
  }
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: right;
  color: ${props => props.theme.colors.white10};
  text-decoration: none;
  ${props =>
    props.$isActive &&
    `
        font-weight: 500;
    `}
  ${props =>
    props.$isFirst &&
    `
        padding-right: 20px;
    `}
    ${props =>
    props.$isMini &&
    `
        font-size: 12px;
        @media screen and (max-width: 450px) {
            font-size: 10px;
        }
    `}
    ${props =>
    props.$isBtn &&
    `
        width: 76px;
        height: 32px;
        display: flex;
        background: ${props.theme.colors.extraGreen20};
        border-radius: 3px;
        margin-left: 30px;
        align-items: center;
        color: ${props.theme.colors.black30};
        justify-content: center;

        @media screen and (max-width: 450px) {
            width: 54px;
            height: 26px;
            margin-left: 14px;
        }
    `}

    ${props =>
    props.$isPprofile &&
    `
        display: flex;
        align-items: center;
    `}
`;
export const NavigationList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  padding-left: 50px;
`;

export const NavigationProfileIcon = styled.img`
  margin-left: 13px;
`;

export const NavigationBurgerButton = styled.button`
  display: none;
  background: url(${burgerBtn});
  width: 44px;
  height: 44px;
  background-position: center;
  background-repeat: no-repeat;
  border: transparent;
  cursor: pointer;
  transition: opacity 0.4s ease-out;
  padding: 0;

  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 450px) {
    width: 40px;
    height: 43px;
  }
`;
export const NavigationSidebar = styled.div<{
  isShow: boolean;
}>`
  display: none;

  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 300px;
    z-index: 1;
    width: 80vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #202020;
    transition: all 0.5s ease-in-out;
    opacity: 0;
    visibility: hidden;

    ${props =>
      props.isShow
        ? `
              visibility: visible;
              top: 0;
              left: 20%;
              opacity: 1;
          `
        : ''}
  }
  @media screen and (max-width: 450) {
    width: 100vw;

    ${props =>
      props.isShow &&
      `
                left: 0;
          `}
  }
`;

export const NavigationSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const NavigationCloseButton = styled.button`
  position: absolute;
  width: 22px;
  height: 22px;
  top: 22.44px;
  right: 22.44px;
  background-image: url(${closeBtn});
  border: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: transparent;
  cursor: pointer;

  @media screen and (max-width: 450) {
    top: 13.44px;
    right: 13.44px;
  }
`;
export const NavigationSidebarContent = styled.ul`
  padding-top: 159px;
  margin: 0;
`;
export const NavigationSidebarItem = styled.li`
  font-family: ${props => props.theme.fontFamily.standart};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: ${props => props.theme.colors.white10};
  padding-bottom: 28px;
  list-style-type: none;
`;

export const NavigationSidebarNavLink = styled.span<{
  $isActive: boolean;
  $isTop?: boolean;
}>`
  > a {
    text-decoration: none;
    color: ${props => props.theme.colors.white10};

    ${props =>
      props.$isActive &&
      `
          border-bottom: 2px solid #FFFFFF;
          height: 26px;
      `}
  }
`;
export const NavigationSidebarProfile = styled.div`
  padding-bottom: 92px;
`;
export const NavigationSidebarLink = styled.span<{
  $isBottom?: boolean;
}>`
  > a {
    text-decoration: none;
    color: ${props => props.theme.colors.white10};
  }
  text-decoration: none;
  color: ${props => props.theme.colors.white10};
  align-items: center;
  font-size: 14px;
  line-height: 16px;
  display: flex;
`;
