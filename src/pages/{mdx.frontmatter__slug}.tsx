import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'



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
      <div className='the-blog flex flex-col max-w-5xl bg-white px-10 py-5 border'>
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