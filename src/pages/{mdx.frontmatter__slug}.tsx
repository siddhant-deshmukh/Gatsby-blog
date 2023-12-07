import * as React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image'



const BlogPost = ({ data, children }: {
  data?: {
    mdx?: {
      frontmatter: {
        name: string, description?: string, slug?: string, datePublished?: string, tags?: string[],
        featuredImage?: {
          childImageSharp?: {
            gatsbyImageData: ImageDataLike | null
          }
        }
      }
    }
  }, children: JSX.Element
}) => {
  // console.log(data, children)
  let featuredImg = getImage(data?.mdx?.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData as ImageDataLike | null)

  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <main className='flex flex-col items-center'>
        {
          featuredImg && data?.mdx?.frontmatter.name &&
          <div className='w-full max-w-[1024px] aspect-[1024/300]'>
            <GatsbyImage image={featuredImg} alt={data?.mdx?.frontmatter.name} />
          </div>
        }
        <div className='the-blog flex flex-col max-w-5xl bg-white px-10 py-5 border'>
          {children}
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        author
        datePublished
        tags
        name
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(height: 300, width: 1024)
          }
        }
      }
    }
  }
`

export const Head = ({ data }: {
  data?: {
    mdx?: {
      frontmatter: {
        name: string, description?: string, slug?: string, datePublished?: string, tags?: string[],
      }
    }
  }
}) => <title>{data?.mdx?.frontmatter?.name}</title>

export default BlogPost