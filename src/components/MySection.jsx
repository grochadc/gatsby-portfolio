import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  padding: 5%;
  height: 100vh;
  background: palevioletred;
  &:nth-of-type(2n) {
    background: white;
  }
`
const Title = styled.h1`
  text-align: center;
`
const Anchor = styled.div`
  padding-top: 70px;
  margin-top: -50px;
`

const MySection = props => (
  <StyledSection>
    <Anchor id={props.id}>
      <Title>{props.title}</Title>
      {props.children}
    </Anchor>
  </StyledSection>
)

export default MySection
