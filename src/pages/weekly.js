import React from 'react'
import { graphql, Link } from 'gatsby'
import tw from 'tailwind.macro'
import Layout from '../components/layout'
import SEO from '../components/seo'

function WeeklyItem ({ title, desc, week, emoji, date }) {
  return (
    <div css={styles.container}>
      <div css={styles.header}>
        <div>
          <span css={tw`ml-1 text-sm rounded bg-gray-200 text-gray-600 font-semibold py-1 px-1 mb-4 inline-block`}>
            Week {week} - {date}
          </span>
        </div>
        <span>{emoji} </span>
        { title }
      </div>
      <div css={styles.content}>{ desc }</div>
    </div>
  )
}

class WeeklyIndex extends React.Component {
  render () {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const weekly = data.weekly.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='All weekly updates' />
        <div css={tw`flex flex-wrap -m-3`}>
          {weekly.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const { description, icon, week, emoji, date } = node.frontmatter
            return (
              <div css={tw`w-full sm:w-1/2 p-3`} key={node.fields.slug}>
                <Link to={node.fields.slug}>
                  <WeeklyItem title={title} desc={description} icon={icon} week={week} emoji={emoji} date={date} />
                </Link>
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

const styles = {
  container: tw`
    block
    w-full
    shadow-md 
    rounded
    overflow-hidden
    border
    border-gray-300 
    border-solid
  `,
  header: tw`
    py-4
    font-sans
    font-bold
    text-gray-700
    text-center
    text-3xl
    border-b
    border-solid
    border-gray-300
  `,
  content: tw`
    p-4
    leading-relaxed
    text-gray-800
    text-sm
    h-20
    bg-gray-100
    text-gray-600
  `,
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    weekly: allMarkdownRemark(
      filter: { fields: { type: { eq: "weekly" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            emoji
            week
          }
        }
      }
    }
  }
`

export default WeeklyIndex
