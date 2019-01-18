import React from 'react'
import MySection from '../components/MySection'
import Table from '../components/Table'
import Nav from '../components/Nav'
import Grid from '../components/Grid'

const links = [
  { href: '#my-interests', name: 'My Interests' },
  { href: '#my-portfolio', name: 'My Portfolio' },
]

const ThirdPage = () => (
  <div>
    <Nav links={links} />
    <MySection title="My Interests" id="my-interests">
      <Table.Container>
        <Table.Item title="Radio 📻">
          I love telling stories in audio form
        </Table.Item>
        <Table.Item title="Filmmaking 🎬">
          Movie making is my passion
        </Table.Item>
        <Table.Item title="Coding 💻">I made this website myself!</Table.Item>
      </Table.Container>
    </MySection>
    <MySection title="My Portfolio" id="my-portfolio">
      <Grid />
    </MySection>
    <MySection>Yet another section</MySection>
  </div>
)

export default ThirdPage
