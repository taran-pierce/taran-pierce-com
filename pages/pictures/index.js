import React from 'react';
import Layout from '../../components/layout';
import Link from 'next/link';

function Pictures() {
  return (
    <Layout
      pageTitle={`Pictures`}
    >
      <h1>Picture Galleries</h1>
      <h2>Photos from random places</h2>
      <ul style={{
        margin: 0,
        padding: 0,
        listStyleType: 'none',
      }}>
        <li>
          <Link href={'/pictures/pikes-peak'}>
            <a>Pikes Peak</a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
}

export default Pictures;
