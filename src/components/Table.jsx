import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  & > div {
    margin: 30px;
  }
`
const ItemContainer = styled.div`
  text-align: center;
`

const Item = props => (
  <ItemContainer>
    <h2>{props.title}</h2>
    <p>{props.children}</p>
  </ItemContainer>
)

export default {
  Container,
  Item,
}
