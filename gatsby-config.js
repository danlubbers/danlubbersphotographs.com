module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  siteMetadata: {
    siteUrl: `https://www.danlubbersphotographs.com`,
    title: `Dan Lubbers Photographs`,
    lang: `en`,
    csp: `Content-Security-Policy-Report-Only`,
    content: `base-uri 'self'; default-src 'self'; script-src 'self'; default-src strict-dynamic 'sha256-ecIkKw1UaQjeT+fiAh0Q6OKT97qwaQ/RStEQaewwWyI=' 'sha256-ZJDi+oSjxcyUERWmzVdNBlEgr15E8vfvwc/1KYECyhA=' 'sha256-egpbluqkD8NT0bY3bWy7raM9tRIMkfUWboq0Y8KqsFk=' 'sha256-TDdwEMuSwjQNGmm0PafrH5oci5pzSX0eS8B/a4H3pa8='; style-src 'self' data: https://danlubbersphotographs.com 'sha256-AnfeNZHPam5f5RvxnO/Et/VJDEAOuZInJWup7XxmCOY=' 'sha256-LEbWFSWxt+oVnC4xzh4AJ3cGaYv3SkbW0vbyUq1a5Vw='; object-src 'none'; form-action 'self'; font-src 'self' data:; connect-src 'self'; img-src 'self' data: https://danlubbersphotographs.com; report-uri https://danlubbersphotographs.com; report-to default;`,
    titleTemplate: ``,
    description: `Dan Lubbers is a Photographer / Retoucher / Web Developer specializing in Studio and Environmental Portraits.`,
    url: `https://www.danlubbersphotographs.com`, // No trailing slash allowed!
    image: `/src/assets/images/dan-portrait-arcteryx-sv-web-icon.jpg`, // Path to your image you placed in the `static` folder
    twitterUsername: `@danlubbers`,
    keywords: `dan lubbers, photographer, retoucher, web developer, webdeveloper, software engineer, designer, photography, photographs, saratoga springs, ny, new york, louisville, kentucky, ky, ut, utah, louisville photographer, louisville photography, louisville photographs, louisville photographer dan, louisville photography studio, louisville photography studios,  fine art, fine art portraiture, editorial, portraits, portraiture, environmental portraits, studio, product, people, emotion, passion, adventure, action, astrophotography, astronomy, milky way, star, stars, lifestyle, scenic, landscape, iphoneography, music, musicians, will, oldham, jim, james, my morning jacket, mmj, bonnie, prince, billy, sport, sports, red river gorge, rock climbing, climbing, climber, rockclimbing, headshots, low key, commercial, cycling, trailrunning, running, athletes, professional, athlete, athletic, local, canon, wacom, manfrotto, apple, arcteryx, outdoors, gear, industry, la sportiva, prana, red bull, amazon, o hello media`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          `UA-1733817-2`, // Google Analytics / GA
          `AW-CONVERSION_ID`, // Google Ads / Adwords / AW
          `DC-FLOODIGHT_ID`, // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        cookieFlags: `SameSite=None; Secure`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dan Lubbers Photographs`,
        short_name: `Dan Lubbers`,
        icon: `src/assets/images/manifest/maskable_icon.png`,
        icons: [
          {
            src: `src/assets/images/manifest/src/assets/images/manifest/maskable_icon_x48.png`,
            type: `image/png`,
            sizes: `48x48`,
            purpose: `maskable`,
          },
          {
            src: `src/assets/images/manifest/src/assets/images/manifest/maskable_icon_x72.png`,
            type: `image/png`,
            sizes: `72x72`,
            purpose: `maskable`,
          },
          {
            src: `src/assets/images/manifest/src/assets/images/manifest/maskable_icon_x96.png`,
            type: `image/png`,
            sizes: `96x96`,
            purpose: `maskable`,
          },
          {
            src: `src/assets/images/manifest/src/assets/images/manifest/maskable_icon_x128.png`,
            type: `image/png`,
            sizes: `128x128`,
            purpose: `maskable`,
          },
          {
            src: `src/assets/images/manifest/src/assets/images/manifest/maskable_icon_x192.png`,
            type: `image/png`,
            sizes: `192x192`,
            purpose: `any`,
          },
          {
            src: `src/assets/images/manifest/src/assets/images/manifest/maskable_icon_x384.png`,
            type: `image/png`,
            sizes: `384x384`,
            purpose: `maskable`,
          },
          {
            src: `src/assets/images/manifest/src/assets/images/manifest/maskable_icon_x512.png`,
            type: `image/png`,
            sizes: `512x512`,
            purpose: `maskable`,
          },
        ],
        start_url: `/`,
        background_color: `#0e0e0e`,
        theme_color: `#a52a25`,
        display: `standalone`,
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
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          importWorkboxFrom: `cdn`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'portal',
        id: 'portal',
      },
    },
    // {
    //   resolve: `gatsby-plugin-csp`,
    //   options: {
    //     disableOnDev: true,
    //     reportOnly: true, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
    //     mergeScriptHashes: true, // you can disable scripts sha256 hashes
    //     mergeStyleHashes: true, // you can disable styles sha256 hashes
    //     mergeDefaultDirectives: true,
    //     directives: {
    //       'style-src': "'self' data: https://danlubbersphotographs.com",
    //       'img-src': "'self' data: https://danlubbersphotographs.com",
    //       'script-src': "'self'; default-src strict-dynamic",
    //       'report-uri': 'https://danlubbersphotographs.com',
    //       'report-to': 'default',
    //     },
    //   },
    // },
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
