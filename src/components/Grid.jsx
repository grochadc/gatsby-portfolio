import React from 'react'
import styled from 'styled-components'
import Video from './Video'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  & > *:nth-of-type(3n) {
    widht: 1000px;
    grid-column: 1 / 3;
  }
`

const Grid = () => (
  <Container>
    <Video vimeoID="311983548" />
    <Video vimeoID="311983548" />
    <Video vimeoID="311983548" />
    <Video vimeoID="311983548" />
    <Video vimeoID="311983548" />
  </Container>
)

export default Grid
