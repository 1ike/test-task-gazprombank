import React from 'react';

import Header from './Header';
import styles from './Layout.module.scss';
import home from '../../assets/images/home.svg';

interface Props {
  children: React.ReactNode,
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside className={styles.aside}>
          <nav className={styles.nav}>
            <a href="#" className={styles.link}>
              <img src={home} alt="Домой" className={styles.link__icon} />
              Главная
            </a>
          </nav>
        </aside>
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </>
  );
}

export default Layout;
