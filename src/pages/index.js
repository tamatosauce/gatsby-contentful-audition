import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Package from '../components/package'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [hero] = get(this, 'props.data.allContentfulHero.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <Hero data={hero.node} />
          </div> 
          <div className="wrapper">
            <Package data={hero.node} />
          </div> 
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulHero(
      filter: { contentful_id: { eq: "8mG3oMyd96DFZEQHDqLVf" } }
    ) {
      edges {
        node {
          title
          heroBodyList {
            content {
              nodeType
              content {
                content {
                  content {
                    value
                  }
                }
              }
            }
            heroBodyList
          }
          heroPurchaseButtonText
          heroSubscribeButtonText
          purchaseDiscount
          purchasePrice
          subscribeDiscount
          subscribePrice
          stockCount
          shopButton
        }
      }
    }
  }
`
