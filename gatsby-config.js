module.exports = {
  siteMetadata: {
    title: `Ratko | Front-end Developer`,
    description: `I'm a self-taught Front-end developer`,
    author: `Ratko Gjurichanin`,
    siteUrl: "https://ratkogjurichanin.com",
    social: {
      twitter: "https://twitter.com/ratko_gj",
      instagram: "https://www.instagram.com/ratko_gj/",
      linkedin: "https://www.linkedin.com/in/ratko-gjurichanin/",
      github: "https://github.com/RatkoG",
      codepen: "",
      email: "ratko.gjurichanin@gmail.com",
    },
    imageShare: `share.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      // options: {
      //   plugins: [
      //     {
      //       resolve: "gatsby-remark-external-links",
      //       options: {
      //         target: "_blank",
      //         rel: "noreferrer",
      //       },
      //     },
      //   ],
      // },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`300`, `400`, `400i`, `600`, `600i`, `700`],
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-background-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ratko | Front-end Developer`,
        short_name: `Ratko`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#2980b9`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
