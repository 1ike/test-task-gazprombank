import React from 'react';

import styles from './Section.module.scss';


interface Props {
  children: React.ReactNode,
  headerText?: string,
  containerClassName?: string,
}

function Section({ headerText, children, containerClassName }: Props) {
  return (
    <div className={containerClassName}>
      {headerText && <h2 className={styles.header}>{headerText}</h2>}
      <div className={styles.rows}>
        {children}
      </div>
    </div>
  );
}

export default Section;
