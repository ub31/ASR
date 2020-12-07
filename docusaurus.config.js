module.exports = {
  title: 'Personalization of Generalized Activity Recognition Models',
  tagline: 'EE382V-ASR :  Activity Sensing and Recognition Project',
  url: 'https://ub31.github.io',
  baseUrl: '/ASR/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logohead.png',
  organizationName: 'ub31', // Usually your GitHub org/user name.
  projectName: 'ASR', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.jpeg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Description',
          position: 'left',
        }
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
