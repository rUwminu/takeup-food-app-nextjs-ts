import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <NavContainer>
      <div className="inner-container section-container">
        <div className="nav-left">
          <h1 className="nav-logo">
            Take<span>Up</span>!
          </h1>
        </div>
        <div className="nav-right">
          <Link href="#">
            <div className="nav-items">Feature</div>
          </Link>
          <Link href="#">
            <div className="nav-items">Menu</div>
          </Link>
          <Link href="#">
            <div className="nav-items">About</div>
          </Link>
          <Link href="#">
            <button
              className="nav-btn sign-btn"
              onClick={(e) => e.preventDefault()}
            >
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  ${tw`
    sticky
    top-0
    left-0
    py-1
    w-full
    bg-white
  `}

  .inner-container {
    ${tw`
      flex
      items-center
      justify-between
      py-3
    `}

    .nav-left {
      ${tw`
        flex
        items-center
        justify-start
      `}

      .nav-logo {
        ${tw`
          text-xl
          md:text-2xl
          font-bold
          text-gray-800
        `}

        span {
          ${tw`
            text-yellow-500
          `}
        }
      }
    }

    .nav-right {
      ${tw`
        flex-grow
        flex
        items-center
        justify-end
      `}

      .nav-items {
        ${tw`
          hidden
          sm:inline-block
          mx-1
          py-1
          px-4
          text-base
          md:text-base
          font-semibold
          text-gray-600
          cursor-pointer
          rounded-2xl

          transition
          duration-200
          ease-in-out
        `}

        &:hover {
          ${tw`
            bg-gray-200/90
          `}
        }
      }

      .nav-btn {
        ${tw`
          py-1
          px-4
          rounded-2xl
          cursor-pointer

          transition
          duration-200
          ease-in-out
        `}
      }

      .sign-btn {
        ${tw`
          ml-6
          font-semibold
          text-gray-100
          bg-yellow-500
        `}

        &:hover {
          transform: scale(1.1);
        }

        &:focus {
          transform: scale(0.9);
        }
      }
    }
  }
`

export default Header
