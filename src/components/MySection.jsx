import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  margin: 0;
  min-height: 100vh;
  background: palevioletred;
  &:nth-of-type(2n) {
    background: white;
  }
`
const Title = styled.h1`
  text-align: center;
  padding: 60px;
`

const MySection = props => (
  <StyledSection id={props.id}>
    <Title>{props.title}</Title>
    {props.children}
  </StyledSection>
)

export default MySection
