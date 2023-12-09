import { ImageDataLike } from 'gatsby-plugin-image';
import React from 'react'

export default function BlogPageHeader({ frontmatter }: {
  frontmatter: {
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
  } | undefined
}) {
  if (!frontmatter) {
    return <div></div>
  }
  return (
    <>
      <h1 className='blog-title text-secondary-d'>{frontmatter.name}</h1>
      <div className='flex text-primary-4 justify-between items-center mt-1 mb-1 sm:mb-8 lg:mb-12 '>
        <div className='tags-container flex flex-wrap text-sm  lg:text-base font-bold justify-end'>
          {
            frontmatter.tags?.map((tag) => {
              return <span className='mr-3 my-1'>#{tag}</span>
            })
          }
        </div>
        <time className='text-sm font-semibold'>{frontmatter.datePublished}</time>
      </div>
    </>
  )
}
