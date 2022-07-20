import React from 'react';

import LicenseViewRow from './LicenseViewRow';
import styles from './LicenseViewBlock.module.scss';
import { License } from '../../contexts/Licenses';
import { Label } from '../../shared';


const formatDate = (datestring: string) => {
  const date = new Date(datestring);
  const formatter = new Intl.DateTimeFormat('ru');

  return formatter.format(date);
};


function LicenseViewBlock({ license }: { license: License }) {
  const transformedData = [
    { label: Label.Document, value: `${license.type}, № ${license.number}` },
    { label: Label.KindOfActivity, value: license.kindOfActivity },
    { label: Label.Issuer, value: license.issuer },
    { label: Label.Period, value: `${formatDate(license.dateOfIssue)} — ${formatDate(license.validityPeriod)}` },
  ];

  return (
    <div className={styles.fields}>
      {transformedData.map(({ label, value }) => (
        <LicenseViewRow value={value} label={label} key={label} />
      ))}
    </div>
  );
}

export default LicenseViewBlock;
