const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Aspire Budgeting Docs',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [
          'Welcome',
          'Getting Started',
          'Help',
          {
            name: 'Aspire Tabs',
            menu: [
              'Configuration',
              'Localization Tools',
              'Dashboard',
              'Transactions',
              'Balances',
              'Category Transfers',
              'Account Reports',
              'Category Reports',
              'Net Worth Reports',
              'Trend Reports',
              'Spending Reports',
            ],
          },
          'Credit Cards',
          'API',
        ],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/matthewalcorn/Documents/Aspire/Aspire Docs/Website/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Aspire Budgeting Docs',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/matthewalcorn/Documents/Aspire/Aspire Docs/Website',
          templates:
            '/Users/matthewalcorn/Documents/Aspire/Aspire Docs/Website/node_modules/docz-core/dist/templates',
          docz:
            '/Users/matthewalcorn/Documents/Aspire/Aspire Docs/Website/.docz',
          cache:
            '/Users/matthewalcorn/Documents/Aspire/Aspire Docs/Website/.docz/.cache',
          app:
            '/Users/matthewalcorn/Documents/Aspire/Aspire Docs/Website/.docz/app',
          appPackageJson:
            '/Users/matthewalcorn/Documents/Aspire/Aspire Docs/Website/package.json',
          appTsConfig:
            '/Users/matthewalcorn/Documents/Aspire/Aspire Docs/Website/tsconfig.json',
          gatsbyConfig:
            '/Users/matthewalcorn/Documents/Aspire/Aspire Docs/Website/gatsby-config.js',
          gatsbyBrowser:
            '/Users/matthewalcorn/Documents/Aspire/Aspire Docs/Website/gatsby-browser.js',
          gatsbyNode:
            '/Users/matthewalcorn/Documents/Aspire/Aspire Docs/Website/gatsby-node.js',
          gatsbySSR:
            '/Users/matthewalcorn/Documents/Aspire/Aspire Docs/Website/gatsby-ssr.js',
          importsJs:
            '/Users/matthewalcorn/Documents/Aspire/Aspire Docs/Website/.docz/app/imports.js',
          rootJs:
            '/Users/matthewalcorn/Documents/Aspire/Aspire Docs/Website/.docz/app/root.jsx',
          indexJs:
            '/Users/matthewalcorn/Documents/Aspire/Aspire Docs/Website/.docz/app/index.jsx',
          indexHtml:
            '/Users/matthewalcorn/Documents/Aspire/Aspire Docs/Website/.docz/app/index.html',
          db:
            '/Users/matthewalcorn/Documents/Aspire/Aspire Docs/Website/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
