import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <StaticQuery
      query={graphql`
        query Markdown {
          allMarkdownRemark {
            edges {
              node {
                html
                headings {
                  depth
                  value
                }
                frontmatter {
                  # Assumes you're using title in your frontmatter.
                  title
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          Give em Hell
          {data.allMarkdownRemark.edges[0].node.html}
        </>
      )}
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
