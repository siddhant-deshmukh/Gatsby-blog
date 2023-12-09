import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image'
import BlogPageHeader from '../components/BlogPageHeader'
import BlogHead from '../components/BlogHead'



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
      {/* <div className='h-[50vh] hidden lg:block fixed top-0 left-0 w-full -z-10 dark-gradient-bg'></div> */}
      <main className='flex flex-col items-center py-0 lg:py-10 px-0 lg:px-5 xl:px-0'>
        {
          featuredImg && data?.mdx?.frontmatter.name &&
          <div className='w-full max-w-[1024px] aspect-[1024/320]'>
            <GatsbyImage image={featuredImg} alt={data?.mdx?.frontmatter.name} />
          </div>
        }

        <div className='the-blog flex flex-col max-w-5xl bg-white shadow-blue-900 shadow-lg w-full px-3 md:px-7 py-5 border-x border-b-2 border-t-0'>
          <BlogPageHeader frontmatter={data?.mdx?.frontmatter}/>
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
}) => <BlogHead seo={{
  ...data?.mdx?.frontmatter,
  tags: data?.mdx?.frontmatter?.tags?.join(" ")
}} />

export default BlogPost