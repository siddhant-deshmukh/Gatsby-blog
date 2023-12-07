import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'


const BlogPost = ({ data, children } : {
  data? : {
    mdx?: {
      frontmatter?: {
        name: string 
        featuredImage?: {
          childImageSharp: {
            gatsbyImageData?: string
          }
        }
      }
    }
  }, children: JSX.Element
}  ) => {
  console.log(data, children)
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <div className='the-blog flex flex-col max-w-6xl'>
        {children}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        name
      }
    }
  }
`

export const Head = () => <title>Something</title>

export default BlogPost