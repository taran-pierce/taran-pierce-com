import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';

function Index() {

  const otherLinks = [
    {
      href: 'https://www.taranitup.com/',
      name: 'Taranitup',
    },
    {
      href: 'https://github.com/taran-pierce',
      name: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/taran-pierce-4b6b5721/',
      name: 'LinkedIn',
    },
  ];

  return (
    <Layout
      pageTitle={'Home'}
    >
      <h1>Taran Pierce</h1>
      <h2>Got some random stuff to start throwing on here.</h2>
      <h3>Pictures</h3>
      <p>I enjoy taking photos and will post some in my image gallery so I can show them off and also so I can build an image gallery from scratch.</p>
      <p>
        <Link href={`/pictures/`}>
          <a>Pictures</a>
        </Link>
      </p>
      <h3>My other stuff</h3>
      <p>Some of my other content can be found here:</p>
      <ul
        style={{
          maring: 0,
          padding: 0,
          listStyleType: 'none',
        }}
      >
        {otherLinks.map( (link) => (
          <li key={link.name}>
            <a 
              href={link.href} 
              rel={`noopener`}
              style={{
                padding: '.5rem 0',
                display: 'inline-block',
              }}
              target={'_blank'}
            >{link.name}</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default Index;
