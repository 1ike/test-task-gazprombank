import React from 'react';

import styles from './Section.module.scss';


interface Props {
  headerText: string,
  children: React.ReactNode,
}

function Section({ headerText, children }: Props) {
  return (
    <>
      <h2 className={styles.header}>{headerText}</h2>
      <div className={styles.rows}>
        {children}
      </div>
    </>
  );
}

export default Section;
