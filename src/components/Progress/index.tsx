import React from 'react';
import cn from 'classnames';

import styles from './Progress.module.scss';


export enum ProgressStatus {
  InProgress = 'InProgress',
  Success = 'Success',
  Error = 'Error',
}

export type Statuses<K> = Map<K, ProgressStatus>;

interface Props<K> {
  headerText: string,
  statuses: Statuses<K>,
}

function Progress<K extends string>({ headerText, statuses }: Props<K>) {
  const statusModificatorClassNamePrefix = 'section__status--';
  const statusModificatorClassName = {
    [ProgressStatus.InProgress]: styles[`${statusModificatorClassNamePrefix}inProgress`],
    [ProgressStatus.Success]: styles[`${statusModificatorClassNamePrefix}success`],
    [ProgressStatus.Error]: styles[`${statusModificatorClassNamePrefix}error`],
  };

  const statusesEntries = Array.from(statuses.entries());

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>{headerText}</h3>
      {statusesEntries.map(([name, status], index, array) => (
        <div key={name}>
          <div className={styles.section}>
            <div
              className={cn(styles.section__status, statusModificatorClassName[status])}
            />
            <span className={styles.section__name}>{name}</span>
          </div>
          {(index + 1 !== array.length) && <div className={styles.trunk} />}
        </div>
      ))}
    </div>
  );
}

export default Progress;
