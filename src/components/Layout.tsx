import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Footer from './Footer'
import { useLocation } from '@reach/router'

const Layout = ({ children }: { pageTitle: string, children: React.ReactNode }) => {

  const location = useLocation()

  console.log(location , location.pathname, location.pathname.slice(0,5))
  return (
    <div className={`relative text-primary ${(location.pathname.slice(0,6) === '/blog/' && location.pathname.length > 6)?'bg-main':''}`}>
      <nav className='flex items-center z-50 space-x-10 px-5 py-3 sm:px-10 sm:py-5 justify-end text-base lg:text-lg font-semibold'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div className='flex justify-center'>
        <div className='w-screen'>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout