
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/ASR/',
  component: ComponentCreator('/ASR/','5ec'),
  exact: true,
},
{
  path: '/ASR/blog',
  component: ComponentCreator('/ASR/blog','82c'),
  exact: true,
},
{
  path: '/ASR/blog/hello-world',
  component: ComponentCreator('/ASR/blog/hello-world','0e6'),
  exact: true,
},
{
  path: '/ASR/blog/hola',
  component: ComponentCreator('/ASR/blog/hola','4ff'),
  exact: true,
},
{
  path: '/ASR/blog/tags',
  component: ComponentCreator('/ASR/blog/tags','8d1'),
  exact: true,
},
{
  path: '/ASR/blog/tags/docusaurus',
  component: ComponentCreator('/ASR/blog/tags/docusaurus','ef8'),
  exact: true,
},
{
  path: '/ASR/blog/tags/facebook',
  component: ComponentCreator('/ASR/blog/tags/facebook','879'),
  exact: true,
},
{
  path: '/ASR/blog/tags/hello',
  component: ComponentCreator('/ASR/blog/tags/hello','208'),
  exact: true,
},
{
  path: '/ASR/blog/tags/hola',
  component: ComponentCreator('/ASR/blog/tags/hola','be8'),
  exact: true,
},
{
  path: '/ASR/blog/welcome',
  component: ComponentCreator('/ASR/blog/welcome','3d3'),
  exact: true,
},
{
  path: '/ASR/docs',
  component: ComponentCreator('/ASR/docs','259'),
  
  routes: [
{
  path: '/ASR/docs/',
  component: ComponentCreator('/ASR/docs/','6d0'),
  exact: true,
},
{
  path: '/ASR/docs/doc2',
  component: ComponentCreator('/ASR/docs/doc2','857'),
  exact: true,
},
{
  path: '/ASR/docs/doc3',
  component: ComponentCreator('/ASR/docs/doc3','4f9'),
  exact: true,
},
{
  path: '/ASR/docs/doc4',
  component: ComponentCreator('/ASR/docs/doc4','ada'),
  exact: true,
},
{
  path: '/ASR/docs/doc5',
  component: ComponentCreator('/ASR/docs/doc5','9d7'),
  exact: true,
},
{
  path: '/ASR/docs/doc6',
  component: ComponentCreator('/ASR/docs/doc6','6e8'),
  exact: true,
},
{
  path: '/ASR/docs/doc7',
  component: ComponentCreator('/ASR/docs/doc7','ced'),
  exact: true,
},
{
  path: '/ASR/docs/doc8',
  component: ComponentCreator('/ASR/docs/doc8','f19'),
  exact: true,
},
{
  path: '/ASR/docs/mdx',
  component: ComponentCreator('/ASR/docs/mdx','92e'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
