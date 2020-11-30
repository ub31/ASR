
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','c45'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','b84'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','8dc'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','80e'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','917'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','9b0'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','84c'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','286'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','b52'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','fc6'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','87d'),
  exact: true,
},
{
  path: '/docs/doc2',
  component: ComponentCreator('/docs/doc2','fd3'),
  exact: true,
},
{
  path: '/docs/doc3',
  component: ComponentCreator('/docs/doc3','e02'),
  exact: true,
},
{
  path: '/docs/doc4',
  component: ComponentCreator('/docs/doc4','50f'),
  exact: true,
},
{
  path: '/docs/doc5',
  component: ComponentCreator('/docs/doc5','b2b'),
  exact: true,
},
{
  path: '/docs/doc6',
  component: ComponentCreator('/docs/doc6','b6d'),
  exact: true,
},
{
  path: '/docs/doc7',
  component: ComponentCreator('/docs/doc7','ad0'),
  exact: true,
},
{
  path: '/docs/doc8',
  component: ComponentCreator('/docs/doc8','728'),
  exact: true,
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx','955'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
