import * as React from "react"
import { Link, HeadFC } from "gatsby"
import Layout from "../components/Layout"

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Not Found">
      <div className="w-full h-[80vh] flex items-center justify-center">
        <div className="bg-main border border-secondary-2 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-sm shadow-secondary-2">
          <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-primary-light-1">404</p>
          <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-primary-light-2 mt-4">Page Not Found</p>
          <p className="text-primary-light-3 mt-4 pb-4 border-b-2 text-center">Sorry, the page you are looking for could not be found.</p>
          <Link to="/" className="flex items-center space-x-2 border border-secondary-2 hover:bg-secondary hover:bg-opacity-10 text-secondary font-bold px-4 py-2 mt-6 rounded transition duration-150" title="Return Home">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
            </svg>
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <><title>Not found</title></>