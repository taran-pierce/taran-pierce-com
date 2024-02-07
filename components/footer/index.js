import React from 'react';

import styles from './footer.module.scss';

function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <p className={styles.copyright}>some copyright bullshit</p>
      </div>
    </footer>
  );
}

export default Footer;
