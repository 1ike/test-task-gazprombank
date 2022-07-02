import React from 'react';

import styles from './Section.module.scss';


interface Props {
  headerText: string,
  children: React.ReactNode,
  containerClassName?: string,
}

function Section({ headerText, children, containerClassName }: Props) {
  return (
    <div className={containerClassName}>
      <h2 className={styles.header}>{headerText}</h2>
      <div className={styles.rows}>
        {children}
      </div>
    </div>
  );
}

export default Section;
