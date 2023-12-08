import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Footer from './Footer'

const Layout = ({ children }: { pageTitle: string, children: React.ReactNode }) => {
  return (
    <div className='relative'>
      <nav className='flex items-center top-0 z-50 border shadow-md bg-white sticky space-x-10 px-5 py-3 sm:px-10 sm:py-5 justify-end text-base lg:text-lg font-semibold'>
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