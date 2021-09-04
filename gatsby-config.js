module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  siteMetadata: {
    siteUrl: `https://www.danlubbersphotographs.com`,
    title: `Dan Lubbers Photographs`,
    lang: `en`,
    titleTemplate: ``,
    description: `Dan Lubbers is a Photographer / Retoucher / Web Developer specializing in Studio and Environmental Portraits.`,
    url: `https://www.danlubbersphotographs.com`, // No trailing slash allowed!
    image: `/src/assets/images/dan-portrait-arcteryx-sv-web-icon.jpg`, // Path to your image you placed in the `static` folder
    twitterUsername: `@danlubbers`,
    keywords: `dan lubbers, photographer, retoucher, web developer, webdeveloper, software engineer, designer, photography, photographs, saratoga springs, ny, new york, louisville, kentucky, ky, ut, utah, hi, hawaii, fine art, fine art portraiture, editorial, portraits, portraiture, environmental portraits, studio, product, people, emotion, passion, adventure, action, astrophotography, astronomy, milky way, star, stars, lifestyle, scenic, landscape, iphoneography, music, musicians, will, oldham, jim, james, my morning jacket, mmj, bonnie, prince, billy, sport, sports, red river gorge, rock climbing, climbing, climber, rockclimbing, headshots, low key, commercial, cycling, trailrunning, running, athletes, professional, athlete, athletic, local, canon, wacom, manfrotto, apple, arcteryx, outdoors, gear, industry, la sportiva, prana, red bull, amazon, o hello media`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dan Lubbers Photographs`,
        short_name: `Dan Lubbers Photos`,
        start_url: `/`,
        background_color: `#f7f0eb#0e0e0e`,
        theme_color: `#a52a25`,
        display: `standalone`,
        icon: `src/assets/images/manifest/danlubbers-favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'UA-1733817-2', // Google Analytics / GA
          'AW-CONVERSION_ID', // Google Ads / Adwords / AW
          'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
  ],
};
