import React from 'react';

import styles from './Header.module.scss';
import avatar from '../../../assets/images/avatar.svg';
import notification from '../../../assets/images/notification.svg';
import exit from '../../../assets/images/exit.svg';

interface ButtonProps {
  children: React.ReactNode,
}

function Button({ children }: ButtonProps) {
  return (
    <button type="button" className={styles.user__button}>
      {children}
    </button>
  );
}

function Header() {
  return (

    <header className={styles.header}>
      <a href="#" className={styles.logo}>Logo</a>
      <div className={styles.user}>
        <Button>
          <img src={avatar} alt="Аватар" />
          Фамилия И.О.
        </Button>
        <Button>
          <img src={notification} alt="Уведомление" />
        </Button>
        <Button>
          <img src={exit} alt="Выход" />
        </Button>
      </div>
    </header>
  );
}

export default Header;
