import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  font: inherit;
  display: inline-block;
  overflow: visible;
  margin: 0;
  padding: 1.5rem;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;

  &:hover {
    opacity: 0.7;
  }
  &.is-active {
    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
      background-color: green;
    }
  }

  .hamburger-box {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 24px;
  }

  .hamburger-inner {
    top: 50%;
    display: block;
    margin-top: -2px;

    &,
    &::before,
    &::after {
      position: absolute;
      width: 3rem;
      height: 0.3rem;
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
      border-radius: 5px;
      background-color: black;
    }

    &::before,
    &::after {
      content: "";
      display: block;
    }

    &::before {
      top: -1rem;
    }

    &::after {
      bottom: -1rem;
    }
  }

  .hamburger-inner {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

    &::after {
      top: -20px;
      transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
        opacity 0.1s linear;
    }

    &::before {
      transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
        transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }

  &.is-active {
    .hamburger-inner {
      transform: translate3d(0, -10px, 0) rotate(-45deg);
      transition-delay: 0.22s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

      &::after {
        top: 0;
        opacity: 0;
        transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
          opacity 0.1s 0.22s linear;
      }

      &::before {
        top: 0;
        transform: rotate(-90deg);
        transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
          transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }
  }
`
const HamburgerToggler = ({ menuOpened, toggleChange }) => {
  return (
    <StyledButton
      className=""
      type="button"
      checked={menuOpened}
      onChange={toggleChange}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </StyledButton>
  )
}

export default HamburgerToggler
