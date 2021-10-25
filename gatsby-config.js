module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "uloax",
  },
  plugins: ["gatsby-plugin-styled-components", 
  "gatsby-plugin-react-helmet",
  {
    resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-us-east-1.graphcms.com/v2/ckv72s68x4vxt01zd5xpseznz/master",
      },
  }
],
};
