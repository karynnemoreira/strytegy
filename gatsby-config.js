module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "strytegy",
  },
  plugins: ["gatsby-plugin-styled-components"],
  plugins: [`gatsby-plugin-react-helmet`],
  plugins: [   
    {
      resolve: "gatsby-source-graphql",
      options: {
                typeName: "alldata",
                fieldName: "alldata",
                url: "https://api-us-east-1.graphcms.com/v2/ckw6s63rj1mu701xx4y8mgjyw/master",
      },
    },
  ]
  }