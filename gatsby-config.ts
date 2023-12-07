import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `blog1`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              showCaptions: true,
              //@ts-ignore
              wrapperStyle: fluidResult => ` height: 500px; max-height : 500px; 	object-fit: contain; max-width:${Math.round(fluidResult.aspectRatio*500)}px; };`
            },
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     "name": "pages",
    //     "path": "./src/pages/"
    //   },
    //   __key: "pages"
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "path": `${__dirname}/blogs/`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "path": `${__dirname}/src/pages/`
      },
    },
    'gatsby-plugin-postcss',
  ]
};

export default config;
