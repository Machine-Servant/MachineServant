const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `MachineServant`,
    description: `Make the machines work for you! Let us help you build your next web site or application.`,
    author: `@MachineServant`,
    siteUrl: `https://www.machineservant.com`,
    image: `/images/machineservant.jpg`,
    contact: `contact@machineservant.com`,
    keywords: [
      'MachineServant',
      'Machine Servant',
      'Software Development',
      'Website Development',
      'Software Shop',
      'Development Agency',
      'Akron',
      'Cleveland',
      'Ohio',
    ],
    social: {
      linkedIn: 'https://www.linkedin.com/company/machineservant/',
      facebook: 'https://www.facebook.com/MachineServant/',
      instagram: 'https://www.instagram.com/machineservant/',
    },
    navigation: [
      {
        name: 'Services',
        location: '/about',
      },
      {
        name: 'Contact',
        location: '/contact',
      },
      {
        name: 'Blog',
        location: '/blog',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MachineServant`,
        short_name: `MachineServant`,
        start_url: `/`,
        background_color: `#c8c8c8`,
        theme_color: `#c8c8c8`,
        display: `minimal-ui`,
        icon: `content/images/machineservant-logo.png`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-emotion`,
    `gatsby-background-image`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: '+>',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-148378802-1',
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`),
          require('cssnano')({ preset: 'default' }),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        options: {
          policy: [{ userAgent: '*', allow: '/' }],
        },
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        ignore: ['prismjs/'],
        content: [
          path.join(process.cwd(), 'src/**/!(*.d).{ts,js,jsx,tsx}'),
          path.join(
            process.cwd(),
            'node_modules/@bit/machineservant.ms-components.*/**/!(*.d).{ts,js,jsx,tsx}'
          ),
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
