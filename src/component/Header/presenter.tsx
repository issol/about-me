import React from 'react';

import styled from 'styled-components';

const HeaderPresenter = () => {
  return (
    <MainHeader>
      <MenuContainer id='menu'>
        <MenuItem>
          <MenuLink href='#about'>About</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href='#experience'>Experience</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href='#education'>Education</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href='#projects'>Projects</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href='#skills'>Skills</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href='#contact'>Contact</MenuLink>
        </MenuItem>
      </MenuContainer>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
  animation-name: dropHeader;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-duration: 0.75s;

  &.active {
    display: block;
  }

  &.sticky {
    position: fixed;
    z-index: 999;
  }
`;

const MenuContainer = styled.ul`
  display: inline-block;
  background: #fff;
  text-align: center;
  padding: 10px;
  margin: 0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &.active {
    display: block;
  }
`;

const MenuItem = styled.li`
  display: inline-block;
`;

const MenuLink = styled.a`
  display: block;
  color: #3498db;
  padding: 10px;
  text-decoration: none;

  &:hover {
    color: darken($base-color, 10%);
    text-decoration: none;
    background: #eee;
    border-radius: 4px;
  }

  &:focus {
    color: darken($base-color, 10%);
    text-decoration: none;
  }
`;

export default HeaderPresenter;
