import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
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
      <div className='h-[50vh] hidden lg:block fixed top-0 left-0 w-full -z-10 dark-gradient-bg'></div>
      <main className='flex flex-col items-center py-0 lg:py-10 px-0 lg:px-5 xl:px-0'>
        {
          featuredImg && data?.mdx?.frontmatter.name &&
          <div className='w-full max-w-[1024px] aspect-[1024/320]'>
            <GatsbyImage image={featuredImg} alt={data?.mdx?.frontmatter.name} />
          </div>
        }

        <div className='the-blog flex flex-col max-w-5xl bg-white shadow-blue-900 shadow-lg w-full px-3 md:px-7 py-5 border-x border-b-2 border-t-0'>
          <div className='ml-auto'>
            <time className='text-sm font-semibold'>{data?.mdx?.frontmatter?.datePublished}</time>
          </div>
          <h1 className='blog-title'>{data?.mdx?.frontmatter?.name}</h1>
          <div className='tags-container flex flex-wrap ml-5 sm:ml-10 mt-2 mb-1 sm:mt-5 sm:mb-8 lg:mb-16 text-xs lg:text-sm font-bold justify-end'>
            {
              data?.mdx?.frontmatter?.tags?.map((tag) => {
                return <span className='mr-3 mb-1 sm:mb-2'>#{tag}</span>
              })
            }
          </div>
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
            gatsbyImageData(height: 320, width: 1024)
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