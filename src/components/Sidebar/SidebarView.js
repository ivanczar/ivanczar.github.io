import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  ExternalLinkIcon,
} from './SidebarElements';
const SidebarView = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to='home' onClick={toggle} offset={-80}>
              Home
            </SidebarLink>
            <SidebarLink to='about' onClick={toggle} offset={-80}>
              {' '}
              About
            </SidebarLink>
            <SidebarLink to='projects' onClick={toggle} offset={-80}>
              {' '}
              Projects
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute
              href='https://drive.google.com/file/d/1MmZOX9T7ng9cm21bnEWueOiHbnN7da80/view?usp=sharing'
              target='_blank'
            >
              CV
              <ExternalLinkIcon />
            </SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default SidebarView;
