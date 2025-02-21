import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>

      <nav
        className="relative flex w-full flex-nowrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-blue-500 lg:flex-wrap lg:justify-start lg:py-4"
        data-twe-navbar-ref>
        <div className="flex w-full flex-wrap items-center justify-between px-3">

          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center justify-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent8"
            data-twe-collapse-item>

            <ul
              className="list-style-none flex flex-col ps-0 lg:mt-1 lg:flex-row text-white"
              data-twe-navbar-nav-ref>

              <li
                className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2 mr-5"
                data-twe-nav-item-ref>

                <Link to={'/home'}>Home</Link>
              </li>



              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0 mr-5"
                data-twe-nav-item-ref>
               <Link to={'/about'}>About</Link>
              </li>
              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0 mr-5"
                data-twe-nav-item-ref>
                
                <Link to={'/blog'}>Blog</Link>
              </li>
              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                data-twe-nav-item-ref>
                <Link to={'/contact'}>Contact</Link>
              </li>

              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation