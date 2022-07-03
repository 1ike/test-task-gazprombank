import React from 'react';

import LicenseViewRow from './LicenseViewRow';
import styles from './TextFieldsBlock.module.scss';


interface LicenseData {
  label: string,
  value: string,
}

interface Props {
  data: LicenseData[],
}

function LicenseViewBlock({ data }: Props) {
  return (
    <div className={styles.fields}>
      {data.map(({ label, value }) => (
        <LicenseViewRow value={value} label={label} key={label} />
      ))}
    </div>
  );
}

export default LicenseViewBlock;
