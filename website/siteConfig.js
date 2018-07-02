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
    image: 'img/woocommerce.png',
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

const apis = [
  {
    title: 'Nfe v1',
    content: 'API para emissão de Nota Fiscal de Serviço',
    apiLink: 'api/nfe-v1',
  },
  {
    title: 'Nfe v2',
    content: 'API para emissão de Nota Fiscal de Produto',
    apiLink: 'api/nfe-v1',
  },
  {
    title: 'Address v1',
    content: 'API para consulta da endereços',
    apiLink: 'api/nfe-v1',
  },
  {
    title: 'Legal Entity v1',
    content: 'API para consulta de CNPJ',
    apiLink: 'api/nfe-v1',
  },
  {
    title: 'Sefaz NF v1',
    content: 'API para consulta de notas fiscais',
    apiLink: 'api/nfe-v1',
  },
  {
    title: 'Natural Person v1',
    content: 'API para consulta de CPF',
    apiLink: 'api/nfe-v1',
  },
];

const sdks = [
  {
    caption: 'Csharp',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/lang-logos/csharp.svg',
    // infoLink: 'https://github.com/nfe/client-nodejs',
    pinned: true,
  },
  {
    caption: 'Node.JS',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/lang-logos/nodejs.svg',
    // infoLink: 'https://github.com/nfe/client-nodejs',
    pinned: true,
  },
  {
    caption: 'PHP',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/lang-logos/php.svg',
    // infoLink: 'https://github.com/nfe/client-php',
    pinned: true,
  },
  {
    caption: 'Python',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/lang-logos/python.svg',
    // infoLink: 'https://github.com/nfe/client-python',
    pinned: true,
  },
  {
    caption: 'Ruby',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/lang-logos/ruby.svg',
    // infoLink: 'https://github.com/nfe/client-ruby',
    pinned: true,
  },
  {
    caption: 'Scala',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/lang-logos/scala.svg',
    // infoLink: 'https://github.com/nfe/client-ruby',
    pinned: true,
  },
  {
    caption: 'Java',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/lang-logos/java.svg',
    // infoLink: 'https://github.com/nfe/client-ruby',
    pinned: true,
  },
  {
    caption: 'Golang',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/lang-logos/golang.svg',
    // infoLink: 'https://github.com/nfe/client-ruby',
    pinned: true,
  },
  // {
  //   caption: 'Erlang',
  //   // You will need to prepend the image path with your baseUrl
  //   // if it is not '/', like: '/test-site/img/docusaurus.svg'.
  //   image: 'img/lang-logos/erlang.svg',
  //   // infoLink: 'https://github.com/nfe/client-ruby',
  //   pinned: true,
  // },
]

const platforms = [
  {
    caption: `Moip`,
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/integration-logos/moip.svg',
    erpLink: '/docusaurus/erp/moip',
    pinned: true,
  },
  {
    caption: `Vindi`,
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/integration-logos/vindi.svg',
    erpLink: 'erp/vindi',
    pinned: true,
  },
  {
    caption: `Pag Seguro`,
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/integration-logos/pagseguro.svg',
    erpLink: 'erp/pagseguro',
    pinned: true,
  },
  {
    caption: `Mundipagg`,
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/integration-logos/mundipagg.svg',
    erpLink: 'erp/mundipagg',
    pinned: true,
  },
  {
    caption: `Iugu`,
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/integration-logos/iugu.svg',
    erpLink: 'erp/iugu',
    pinned: true,
  },
  {
    caption: `Pagar.me`,
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/integration-logos/pagar-me.svg',
    erpLink: 'erp/pagarme',
    pinned: true,
  },
  {
    caption: `Stripe`,
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/integration-logos/stripe.svg',
    erpLink: 'erp/stripe',
    pinned: true,
  },
  {
    caption: `Paypal`,
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/integration-logos/paypal.svg',
    erpLink: 'erp/paypal',
    pinned: true,
  },
];



const siteConfig = {
  tagline: 'Documentações',
  title: 'NFe.io : Documentação' /* title for your website */,
  url: 'https://yagosenhorini.github.io' /* your website url */,
  baseUrl: '/docusaurus/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'docusaurus',
  organizationName: 'yagosenhorini',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'doc1', label: 'Documentação' },
    { page: 'api', label: `API's` },
    { blog: true, label: 'Atualizações' },
    // { languages: true }
  ],

  // If you have users set above, you add it here:
  plugins, sdks, platforms, apis,

  /* path to images for header/footer */
  headerIcon: 'img/nfe-logo.svg',
  favicon: 'img/favicon/favicon.ico',
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
  scripts: [
    'https://buttons.github.io/buttons.js',
  ],

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
    scrollDuration: 200,
  },

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/yagosenhorini/docusaurus',
};

module.exports = siteConfig;