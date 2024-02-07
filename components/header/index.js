import React from 'react';
import Link from 'next/link';

import styles from './header.module.scss';

function Header() {
  return (
    <header>
      <nav>
        <ul className={styles.mainNavigation}>
          <li>
            <Link href="/">
              <a className={styles.link}>TP</a>
            </Link>
          </li>
          <li>
            <Link href="/pictures/">
              <a className={styles.link}>Pictures</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
