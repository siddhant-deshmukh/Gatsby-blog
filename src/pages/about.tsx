import React from 'react'
import Layout from '../components/Layout'

function About() {
  return (
    <Layout pageTitle="About Me">
      <div className="w-full h-[80vh] flex items-center justify-center">
        <div className="bg-main border border-secondary-2 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-sm shadow-secondary-2">
          <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-primary-light-2 mt-4">About Me</p>
          <p className="text-primary-light-3 mt-4 pb-4 border-b-2 text-center">
            Hi there! I'm the creator and designer of this site, which I built with Gatsby.
          </p>
          <div className='flex space-x-2'>
            <a href="https://siddhant-deshmukh.github.io/" className="flex items-center space-x-2 border border-secondary-2 hover:bg-secondary hover:bg-opacity-10 text-secondary font-bold px-4 py-2 mt-6 rounded transition duration-150" title="Return Home">
              <span>Portfolio</span>
            </a>
            <a href="https://github.com/siddhant-deshmukh" className="flex items-center space-x-2 border border-secondary-2 hover:bg-secondary hover:bg-opacity-10 text-secondary font-bold px-4 py-2 mt-6 rounded transition duration-150" title="Return Home">
              <span>Github</span>
            </a>
            <a href="mailto:learner.siddhant.deshmukh@gmail.com" className="flex items-center space-x-2 border border-secondary-2 hover:bg-secondary hover:bg-opacity-10 text-secondary font-bold px-4 py-2 mt-6 rounded transition duration-150" title="Return Home">
              <span>Mail</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <><title>About Me | Siddhant Deshmukh</title></>

export default About
