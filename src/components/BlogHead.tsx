import React from 'react'

export default function BlogHead({ seo } : {
  seo : {
    name?: string,
    description?: string,
    image?: string,
    keywords?: string,
    tags?: string,
    topic?: string,
  }
}) {
  return (
    <>
      {/* To add icon for website */}
      {/* <link rel="icon" href="favicon.png"></link> */}

      {
        seo.name && <title>{seo.name}</title>
      }
      {
        seo.description && <meta name="description" content={seo.description} />
      }
      {
        seo.keywords && <meta name="keywords" content={seo.keywords} />
      }
      {
        seo.image && <meta name="image" content={seo.image} />
      }
      {
        seo.tags && <meta name="tags" content={seo.tags} />
      }
      {
        seo.topic && <meta name="topic" content={seo.topic} />
      }
    </>
  )
}
