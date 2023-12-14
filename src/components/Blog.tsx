import { GatsbyImage, IGatsbyImageData, ImageDataLike, StaticImage } from 'gatsby-plugin-image';
import React from 'react'

export function BlogCardRect({ blog, featuredImg }: {
  blog: {
    name: string;
    description?: string | undefined;
    slug?: string | undefined;
    datePublished?: string | undefined;
    tags?: string[] | undefined;
    featuredImage?: {
      childImageSharp?: {
        gatsbyImageData: ImageDataLike | null;
      } | undefined;
    } | undefined;
  },
  featuredImg: IGatsbyImageData | undefined
}) {
  return (
    <a href={`/${blog.slug}`} className="flex flex-col sm:flex-row items-center justify-around overflow-hidden my-4 max-w-3xl bg-white border border-gray-400 rounded-lg shadow-lg shadow-secondary">
      <div className="object-none object-center border flex-shrink-0 w-auto h-full sm:h-auto sm:w-[120px] md:w-[250px] aspect-[10:10] mx-auto sm:aspect-[250/350] md:aspect-[250/270] max-h-64 overflow-hidden">
        {/* <img  src="/docs/images/blog/image-4.jpg" alt="" /> */}
        {
          featuredImg &&
          <GatsbyImage alt={blog.name + "-featured-image"} image={featuredImg} />
        }
      </div>
      <div className="flex flex-col w-full justify-between px-2.5 py-1.5 md:p-4 overflow-hidden leading-normal max-h-64">
        <h5 className="mb-2 text-lg md:text-2xl text-left font-bold tracking-tight text-gray-900 dark:text-white">
          {blog.name.slice(0, 70)}
        </h5>
        <div className='ml-auto font-bold text-xs md:text-sm'>
          <time>{blog.datePublished}</time>
        </div>
        <p className="mb-1.5 md:mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
          {blog.description?.slice(0, 200)}
        </p>
        <div className="flex flex-wrap">
          {
            blog.tags?.slice(0, 5).map((tag, index) => {
              return <span key={index} className='mr-1 mb-1 md:mb-2 md:mr-2 px-3 md:px-4 py-1 md:py-2 border shadow-md text-xs rounded-full font-semibold text-white bg-gray-700'>{tag.slice(0, 10)}</span>
            })
          }
        </div>
      </div>
    </a>
  )
}

export function BlogCardSquare({ blog, featuredImg }: {
  blog: {
    name: string;
    description?: string | undefined;
    slug?: string | undefined;
    datePublished?: string | undefined;
    tags?: string[] | undefined;
    featuredImage?: {
      childImageSharp?: {
        gatsbyImageData: ImageDataLike | null;
      } | undefined;
    } | undefined;
  },
  featuredImg: IGatsbyImageData | undefined
}) {
  // if(!featuredImg){
  //   return <></>
  // }
  return (
    <a href={`/blog/${blog.slug}`} className='flex flex-col rounded-xl overflow-hidden w-auto md:w-[500px] border shadow-sm shadow-secondary border-secondary-3 my-4 hover:bg-secondary-2 hover:bg-opacity-10 hover:scale-105 transition-all duration-500'>
      <div className="object-none object-center max-w-full max-h-64 overflow-hidden mx-auto">
        {/* <img  src="/docs/images/blog/image-4.jpg" alt="" /> */}
        {
          featuredImg &&
          <GatsbyImage alt={blog.name + "-featured-image"} image={featuredImg} />
        }
        {
          !featuredImg &&
          // <div className='min-w-full h-52 bg-cyan-800 md:w-[500px]'>
          // </div>
          <StaticImage src='../images/bg-img.avif' alt="default image"/>
        }
      </div>
      <div className="flex flex-col w-full justify-evenly px-2.5 py-1.5 md:p-4 overflow-hidden leading-normal max-h-80">
        <h5 className="mb-2 text-lg md:text-2xl text-left font-bold tracking-tight">
          {(blog.name.length > 90) ? blog.name.slice(0, 90) + "..." : blog.name}
        </h5>
        <div className='ml-auto text-xs text-secondary md:text-sm'>
          <time>{blog.datePublished}</time>
        </div>
        <p className="mb-1.5 md:mb-3 text-sm md:text-base font-normal">
          {(blog.description && blog.description.length > 200) ? blog.description.slice(0, 200) + "..." : blog.description}
        </p>
        <div className="flex flex-wrap ">
          {
            blog.tags?.slice(0, 5).map((tag, index) => {
              return <span key={index} className='mb-2 mr-2 px-4 py-2 border border-secondary-2 text-secondary shadow-md text-xs rounded-full font-medium '>{tag}</span>
            })
          }
        </div>
      </div>
    </a>
  )
}
export default BlogCardRect