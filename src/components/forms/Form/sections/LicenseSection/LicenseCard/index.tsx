import React, { PropsWithChildren } from 'react';

import Card from '../../../../../uiKit/Card';
import styles from './LicenseCard.module.scss';


interface Props {
  title: string,
}

function LicenseCard({ title, children }: PropsWithChildren<Props>) {
  return (
    <Card className={styles.card}>
      <h4 className={styles.cardHeader}>{title}</h4>
      {children}
    </Card>
  );
}

export default LicenseCard;
