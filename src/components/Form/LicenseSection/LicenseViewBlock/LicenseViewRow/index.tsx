import React from 'react';

import styles from './LicenseViewRow.module.scss';


interface Props {
  label: string,
  value: string,
}

function LicenseViewRow({ label, value }: Props) {
  return (
    <div className={styles.row}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
}

export default LicenseViewRow;
