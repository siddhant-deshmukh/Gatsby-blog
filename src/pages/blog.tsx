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
      <div className='my-10 max-w-3xl text-white'>
        <h1 className='text-5xl font-bold'>Blogs</h1>
        <p className='text-lg mt-3'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora officiis, sint nemo neque minima laudantium nam, ratione rem, aut ipsa tempore.
        </p>
      </div>
      <div className='flex flex-col items-center w-full mx-auto'>
        {/* <span>{JSON.stringify(data)}</span> */}
        <ul>
          {
            data?.allMdx?.nodes?.map(({ frontmatter: blog }) => {
              let featuredImg = getImage(blog.featuredImage?.childImageSharp?.gatsbyImageData as ImageDataLike | null)

              return (
                <a href={`/${blog.slug}`} className="flex justify-between overflow-hidden my-4 max-w-3xl bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="object-cover flex-shrink-0 w-[250px] max-h-64 overflow-hidden">
                    {/* <img  src="/docs/images/blog/image-4.jpg" alt="" /> */}
                    {
                      featuredImg && 
                      <GatsbyImage alt={blog.name + "-featured-image"} image={featuredImg} />
                    }
                  </div>
                  <div className="flex flex-col w-full justify-between p-4 overflow-hidden leading-normal max-h-64">
                    <h5 className="mb-2 text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
                      {blog.name.slice(0,70)}
                    </h5>
                    <div className='ml-auto text-sm'>
                      <time>{blog.datePublished}</time>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {blog.description?.slice(0,200)}
                    </p>
                    <div className="flex flex-wrap">
                      {
                        blog.tags?.slice(0,5).map((tag)=> {
                          return <span className='mb-2 mr-2 px-4 py-2 border shadow-md text-xs rounded-full font-semibold text-white bg-gray-700'>{tag.slice(0,10)}</span>
                        })
                      }
                    </div>
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
        tags
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 250, height: 270)
          }
        }
      }
    }
  }
}`

export const Head = () => <title>Blogs Page</title>
export default BlogsPage