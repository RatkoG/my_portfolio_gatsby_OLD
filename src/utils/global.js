import { createGlobalStyle } from "styled-components"
import logo from "../images/backgroundPhoto.png"

export default createGlobalStyle`

html {
      font-size: 62.5%; //1rem = 10px
      box-sizing: border-box;
      line-height: 1.15;
    }

		* {
      outline: none;
      box-sizing: inherit;
      ${"" /* -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important; */}
    }
		*,
    *::before,
    *::after {
      box-sizing: inherit;
      ${
        "" /* -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale; */
      }
    }


	body {
		font-family: 'Poppins', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", '!default';
		margin:0;
		width: 100%;
    height: 100%;
		overflow: visible;
    background-color:${props => props.theme.colors.main};
    background-image: url(${logo})
	}
`
