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
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              // wrapperStyle: `display:inline`,
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
        "path": `${__dirname}/blogs`
      },
    },
    'gatsby-plugin-postcss',
  ]
};

export default config;
