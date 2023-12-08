import React from 'react'
import { graphql } from 'gatsby'
import { ImageDataLike, getImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import { BlogCardSquare } from '../components/Blog'

// the prop must be named data
function BlogsPage({ data }: {
  data?: {
    allMdx?: {
      nodes?: {
        id: string,
        frontmatter: {
          name: string, description?: string, slug?: string, datePublished?: string, tags?: string[],
          featuredImage?: {
            childImageSharp?: {
              gatsbyImageData: ImageDataLike | null
            }
          }
        }
      }[]
    }
  }
}) {
  return (
    <Layout pageTitle='Blogs'>
      <div className='h-[50vh] fixed top-0 left-0 w-full -z-10 dark-gradient-bg'></div>
      <div className='w-full py-20 px-2'>
        <div className='mx-auto max-w-[1040px] text-white'>
          {/* Title of the blogs page */}
          <h1 className='text-5xl font-bold'>Blogs</h1>
          {/* For the blogs page Description */}
          <p className='text-lg mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis, sint nemo neque minima laudantium nam, ratione rem, aut ipsa tempore.
          </p>
        </div>
      </div>
      <div className='flex flex-col px-2 items-center w-full mx-auto'>
        {/* <span>{JSON.stringify(data)}</span> */}
        <ul className='grid grid-cols-1 lg:grid-cols-2 grid-flow-cols gap-x-7 gap-y-2'>
          {
            data?.allMdx?.nodes?.map(({ frontmatter: blog }) => {
              let featuredImg = getImage(blog.featuredImage?.childImageSharp?.gatsbyImageData as ImageDataLike | null)
              return <BlogCardSquare blog={blog} featuredImg={featuredImg} />
            })
          }
        </ul>
      </div>
    </Layout>
  )
}

// name can be anything
export const GetBlogsQuery = graphql`query GetBlogsInfoList {
  allMdx(sort: {frontmatter: {datePublished: ASC}}) {
    nodes {
      id
      frontmatter {
        name
        slug
        description
  			author
        datePublished
        tags
        featuredImage {
          childImageSharp {
            # gatsbyImageData(width: 650, height: 910)
            gatsbyImageData(width: 700, height: 300)
          }
        }
      }
    }
  }
}`

export const Head = () => <title>Blogs Page</title>
export default BlogsPage