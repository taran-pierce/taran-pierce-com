import React from 'react';
import Layout from '../../components/layout';
import Gallery from '../../components/gallery';

function Pictures({ images }) {
  return (
    <Layout
      pageTitle={`Pikes Peak`}
    >
      <h1>Pikes Peak</h1>
      {images && <Gallery data={images} />}
    </Layout>
  );
}

const contentful = require('contentful');

export async function getStaticProps(context) {
  const client = contentful.createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  });

  // get image data tagged with pikesPeak
  const images = await client.getAssets({
    'metadata.tags.sys.id[all]': 'pikesPeak',
  }).then((assets) => {
    return assets.items;
  }).catch(err => console.log(err));

  return {
    props: {
      images,
    },
  }
};

export default Pictures;
