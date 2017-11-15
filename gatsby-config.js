module.exports = {
  siteMetadata: {
    title: "Fahad Almusharraf - Website",
    author: "Fahad Almusharraf"
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src`,
        name: "src"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: []
      }
    }
  ]
};
