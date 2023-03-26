module.exports = {
  siteMetadata: {
    title: `Birgit Matthias`,
    siteUrl: `https://www.yourdomain.tld`,
    description: 'Birgit Matthias kunstlerin'
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `1qnal3l2przv`,
        //accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        accessToken: `V0Q6Mv6ZjTOS7x_MEPHLS31gYsfqwkkk1hQay43tgxE`
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
}
