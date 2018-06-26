/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const plugins = [
  {
    caption: 'Wordpress',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/wordpress.png',
    // infoLink: 'https://wordpress.org/plugins/woo-nfe/',
    pinned: true,
  },
  {
    caption: 'WHMCS',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/whmcs.png',
    // infoLink: 'https://www.whmcs.com/members/clientarea.php',
    pinned: true,
  }
];

const sdks = [
  {
    caption: 'Clientes SDK',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/languages.svg',
    // infoLink: 'https://github.com/nfe/client-nodejs',
    pinned: true,
  }
  // {
  //   caption: 'Node.JS',
  //   // You will need to prepend the image path with your baseUrl
  //   // if it is not '/', like: '/test-site/img/docusaurus.svg'.
  //   image: 'img/node.png',
  //   // infoLink: 'https://github.com/nfe/client-nodejs',
  //   pinned: true,
  // },
  // {
  //   caption: 'PHP',
  //   // You will need to prepend the image path with your baseUrl
  //   // if it is not '/', like: '/test-site/img/docusaurus.svg'.
  //   image: 'img/php.png',
  //   // infoLink: 'https://github.com/nfe/client-php',
  //   pinned: true,
  // },
  // {
  //   caption: 'Python',
  //   // You will need to prepend the image path with your baseUrl
  //   // if it is not '/', like: '/test-site/img/docusaurus.svg'.
  //   image: 'img/python.png',
  //   // infoLink: 'https://github.com/nfe/client-python',
  //   pinned: true,
  // },
  // {
  //   caption: 'Ruby',
  //   // You will need to prepend the image path with your baseUrl
  //   // if it is not '/', like: '/test-site/img/docusaurus.svg'.
  //   image: 'img/ruby.png',
  //   // infoLink: 'https://github.com/nfe/client-ruby',
  //   pinned: true,
  // }
]

const integrations = [
  {
    caption: `Integrações com ERP's`,
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/integracoes.svg',
    // infoLink: 'https://wordpress.org/plugins/woo-nfe/',
    pinned: true,
  },
  
];

const siteConfig = {
  tagline: 'Documentações',
  title: 'NFe.io' /* title for your website */,
  url: 'https://yagosenhorini.github.io' /* your website url */,
  baseUrl: '/docusaurus/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'docusaurus',
  organizationName: 'yagosenhorini',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'doc1', label: 'Documentação' },
    { doc: 'doc4', label: `API's` },
    { blog: true, label: 'Atualizações' },
  ],


  // If you have users set above, you add it here:
  plugins, sdks, integrations,

  /* path to images for header/footer */
  headerIcon: 'img/nfe-logo.svg',
  footerIcon: 'img/nfe-logo.svg',
  favicon: 'img/favicon.ico',
  /* colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' NFe.io',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/nfe-logo.svg',
  twitterImage: 'img/nfe-logo.svg',



  disableHeaderTitle: true,
  disableTitleTagline: true,

  algolia: {
    apiKey: '0f9f28b9ab9efae89810921a351753b5',
    indexName: 'github',
  },

  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/yagosenhorini/docusaurus',
};

module.exports = siteConfig;