import React from 'react';
import {
  string,
} from 'prop-types';
import Head from 'next/head';
import Header from '../header';
import Footer from '../footer';

import styles from './layout.module.scss';

function Layout({
  children,
  pageTitle,
}) {
  return (
  <>
    <Head>
      <title>{pageTitle} - taranpierce.com</title>
      <meta name={'viewport'} content={'initial-scale=1.0, width=device-width'} />
      <meta name={'robots'} content={'index, follow'} />
    </Head>
    <Header />
    <main>
      <section>
        <div className={styles.container}>
          {children}
        </div>
      </section>
    </main>
    <Footer />
  </>
  );
}

Layout.propTypes = {
  pageTitle: string.isRequired,
};

export default Layout;
