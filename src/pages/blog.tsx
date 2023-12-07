import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image'
// the prop must be named data
function BlogsPage({ data }: {
  data?: {
    allMdx?: {
      nodes?: {
        id: string,
        frontmatter: {
          name: string, description?: string, slug?: string,
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
      <h1 className='text-4xl font-bold'>Blogs</h1>
      <div className='flex flex-col items-center max-w-7xl w-full h-[200vh] mx-auto'>
        {/* <span>{JSON.stringify(data)}</span> */}
        <ul>
          {
            data?.allMdx?.nodes?.map(({ frontmatter: blog }) => {
              let featuredImg = getImage(blog.featuredImage?.childImageSharp?.gatsbyImageData as ImageDataLike | null)

              return (
                <a href={`/${blog.slug}`} className="flex my-4 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="object-cover w-96 h-96">
                    {/* <img  src="/docs/images/blog/image-4.jpg" alt="" /> */}
                    {
                      featuredImg && 
                      <GatsbyImage alt={blog.name + "-featured-image"} image={featuredImg} />
                    }
                  </div>
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
                      {blog.name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {blog.description}
                    </p>
                  </div>
                </a>)

              // return <li className='border my-5 overflow-hidden max-w-2xl shadow-lg hover:bg-slate-100'>
              //   <a href={`/${blog.slug}`} className='flex' >
              //     {
              //       featuredImg &&
              //       <div>
              //         <GatsbyImage alt={blog.name + "-featured-image"} image={featuredImg} />
              //       </div>
              //     }
              //     <div className=''>
              //       <h3 className='text-xl font-semibold'>{blog.name}</h3>
              //       <p>{blog.description}</p>
              //     </div>
              //   </a>
              // </li>
            })
          }
        </ul>
        <ul >

        </ul>
      </div>
    </Layout>
  )
}

// name can be anything
export const GetBlogsQuery = graphql`query GetBlogsInfoList {
  allMdx {
    nodes {
      id
      frontmatter {
        name
        slug
        description
  			author
        datePublished
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
}`

export const Head = () => <title>Blogs Page</title>
export default BlogsPage