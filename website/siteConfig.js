/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */

const apis = [
  {
    title: 'Nfe v1',
    content: 'API para emissão de Nota Fiscal de Serviço',
    apiLink: 'api/nfe-v1',
  },
  {
    title: 'Nfe v2',
    content: 'API para emissão de Nota Fiscal de Produto',
    apiLink: 'api/nfe-v2',
  },
  {
    title: 'Address v1',
    content: 'API para consulta da endereços',
    apiLink: 'api/address-v1',
  },
  {
    title: 'Legal Entity v1',
    content: 'API para consulta de CNPJ',
    apiLink: 'api/legalentity-v1',
  },
  {
    title: 'Sefaz NF v1',
    content: 'API para consulta de notas fiscais',
    apiLink: 'api/sefaz_nf-v1',
  },
  {
    title: 'Natural Person v1',
    content: 'API para consulta de CPF',
    apiLink: 'api/naturalperson-v1',
  }
];

const platforms = [
  {
    caption: `Moip`,
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/integration-logos/moip.svg',
    erpLink: 'erp/moip',
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
    caption: `PagSeguro`,
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
  }
];

const plugins = [
  {
    caption: `Microsoft Flow`,
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/microsoft-flow.png',
    pluginLink: 'plugin/microsoftFlow',
    pinned: true,
  },
  {
    caption: 'Woocommerce',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/woocommerce.svg',
    pluginLink: 'plugin/woocommerce',
    pinned: true,
  },
  {
    caption: 'WHMCS',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/whmcs.png',
    pluginLink: 'plugin/whmcs',
    pinned: true,
  },
 
];

const sdks = [
  {
    caption: 'Csharp',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/lang-logos/csharp.svg',
    sdkLink: 'sdk',
    pinned: true,
  },
  {
    caption: 'Node.JS',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/lang-logos/nodejs.svg',
    sdkLink: 'sdk',
    pinned: true,
  },
  {
    caption: 'PHP',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/lang-logos/php.svg',
    sdkLink: 'sdk',
    pinned: true,
  },
  {
    caption: 'Python',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/lang-logos/python.svg',
    sdkLink: 'sdk',
    pinned: true,
  },
  {
    caption: 'Ruby',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/lang-logos/ruby.svg',
    sdkLink: 'sdk',
    pinned: true,
  },
  {
    caption: 'Scala',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/lang-logos/scala.svg',
    sdkLink: 'sdk',
    pinned: true,
  },
  {
    caption: 'Java',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/lang-logos/java.svg',
    sdkLink: 'sdk',
    pinned: true,
  },
  {
    caption: 'Golang',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/lang-logos/golang.svg',
    sdkLink: 'sdk',
    pinned: true,
  }
];

const siteConfig = {
  title: 'NFe.io : Documentação' /* title for your website */,
  tagline: 'Documentações',
  url: 'https://yagosenhorini.github.io' /* your website url */,
  baseUrl: '/docs/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'docs',
  organizationName: 'yagosenhorini',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'doc1', label: 'Documentação' },
    { page: 'api', label: `API's` },
    { blog: true, label: 'Atualizações' },
  ],

  // If you have users set above, you add it here:
apis, platforms, plugins, sdks,
  /* path to images for header/footer */
  headerIcon: 'img/nfe-logo.svg',
  favicon: 'img/favicon/favicon.ico',
  /* colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },

  disableHeaderTitle: true,
  disableTitleTagline: true,
  useEnglishUrl: false,
  cleanUrl: true,

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

algolia:{
  apiKey: '45459494sdaosidjoasd',
  indexName: 'github'
},

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/yagosenhorini/docusaurus',
};

module.exports = siteConfig;