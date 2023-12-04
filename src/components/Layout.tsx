import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

const Layout = ({ pageTitle, children }: { pageTitle: string, children: React.ReactNode }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <main className='p-5'>
      <header>{data.site.siteMetadata.title}</header>
      <nav className='flex space-x-5 pb-5'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>

      </nav>

      <h1 className='text-xl'>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout