import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
const SidebarView = ({isOpen, toggle}) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="home" onClick={toggle}>Home</SidebarLink>
            <SidebarLink to="about" onClick={toggle}> About</SidebarLink>
            <SidebarLink to="work" onClick={toggle}>Work</SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/IvanCzar_Resume.pdf" target="_blank" download>Resume (PDF)</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default SidebarView;
