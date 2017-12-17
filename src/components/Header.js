import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import CV from "../assets/cv.pdf";
import COLORS from "../colors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
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
  padding-bottom: 40px;
`;

const NavSeparator = styled.span`
  margin: 0px 10px;
  color: ${COLORS.DARK};
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.DARK};
  &:hover {
    color: ${COLORS.BLACK};
    text-decoration: underline;
  }
`;

const ResumeLink = styled.a`
  text-decoration: none;
  color: ${COLORS.DARK};
  &:hover {
    color: ${COLORS.BLACK};
    text-decoration: underline;
  }
`;

const Menu = () => (
  <Nav>
    <NavLink to="/">Blog</NavLink>
    <NavSeparator>|</NavSeparator>
    <NavLink to="/projects">Projects</NavLink>
    <NavSeparator>|</NavSeparator>
    <ResumeLink href={CV}>Resume</ResumeLink>
    <NavSeparator>|</NavSeparator>
    <NavLink to="/about">About</NavLink>
  </Nav>
);

export default () => (
  <Wrapper>
    <Logo>فهد</Logo>
    <Menu />
  </Wrapper>
);
