// 0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);
// 0 19px 38px rgba(0,0,0,0.3),0 15px 12px rgba(0,0,0,0.22); 0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);0 10px 20px rgba(0,0,0,0.1),0 6px 6px rgba(0,0,0,0.1); //Ova e arna
// 0  3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);
// 0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);
// // Ova bese
// rgba(0, 0, 0, 0.16) 0 0.5rem 2rem
const theme = {
  colors: {
    // main: "#107896",
    main: "#2980b9",
    mainLight: "#4995C7",
    navbar: "rgba(255, 255, 255, 0.95)",
    shadow: "rgba(0, 0, 0, 0.16) 0 0.5rem 2rem",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1),0 6px 6px rgba(0,0,0,0.1)",
    cardShadow: "0  3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23)",
    white: "#fff",
    bgGradient:
      "linear-gradient(to right bottom, #2980b9, #008ab9, #0093b7, #009bb2, #25a3ab)",
    text: "#1c2833",
    // text: "#575757",
    heading: {
      white: "#fff",
      colored: "#2980b9",
    },
  },
  mediaQueries: {
    smallest: `only screen and (max-width: 25em)`, //400px
    smaller: "only screen and (max-width: 31.25em)", //500px
    small: "only screen and (max-width: 37.5em)", //600px
    medium: "only screen and (max-width: 56.25em)", //900px
    large: "only screen and (max-width: 80em)", //1280px
    larger: "only screen and (max-width: 90em)", //1440
    largest: "only screen and (max-width: 97em)", //1552
  },
}

export default theme
