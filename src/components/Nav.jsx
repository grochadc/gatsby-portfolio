import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  & > * {
    padding: 20px;
    font-family: 'Helvetica', 'Arial', sans-serif;
    text-decoration: none;
    color: black;
  }
  padding: 10px;
  background: white;
  position: fixed;
  width: 100%;
  height: 50px;
`

const Nav = ({ links }) => (
  <StyledNav>
    {links.map(link => (
      <a href={link.href}>{link.name}</a>
    ))}
  </StyledNav>
)

export default Nav
