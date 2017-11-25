import React from "react";
import Link from "gatsby-link";
import styled, { css } from "styled-components";
import COLORS from "../colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
`;

const Logo = styled.div`
  font-size: 60px;
  color: ${COLORS.DARKEST};
  padding: 15px 0px;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 24px;
`;

const NavSeparator = styled.span`
  margin: 0px 10px;
  color: ${COLORS.DARKEST};
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.DARK};
  &:hover {
    text-decoration: underline;
  }
`;

const Menu = () => (
  <Nav>
    <NavLink to="/">Blog</NavLink>
    <NavSeparator>|</NavSeparator>
    <NavLink to="/projects">Projects</NavLink>
    <NavSeparator>|</NavSeparator>
    <NavLink to="/resume.pdf">Resume</NavLink>
    <NavSeparator>|</NavSeparator>
    <NavLink to="/About">About</NavLink>
  </Nav>
);

export default () => (
  <Wrapper>
    <Logo>فهد</Logo>
    <Menu />
  </Wrapper>
);
