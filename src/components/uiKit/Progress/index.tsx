import React from 'react';

import styles from './Progress.module.scss';


export enum ProgressStatus {
  InProgress = 'InProgress',
  Success = 'Success',
  Error = 'Error',
}

interface SectionProgress {
  name: string,
  status: ProgressStatus,
}

interface Props {
  headerText: string,
  data: SectionProgress[],
}

function Progress({ headerText, data }: Props) {
  const statusModificatorClassNamePrefix = 'section__status--';
  const statusModificatorClassName = {
    [ProgressStatus.InProgress]: styles[`${statusModificatorClassNamePrefix}inProgress`],
    [ProgressStatus.Success]: styles[`${statusModificatorClassNamePrefix}success`],
    [ProgressStatus.Error]: styles[`${statusModificatorClassNamePrefix}error`],
  };

  return (
    <span className={styles.container}>
      <h3 className={styles.header}>{headerText}</h3>
      {data.map(({ name, status }, index, array) => (
        <>
          <span className={styles.section}>
            <span className={`${styles.section__status} ${statusModificatorClassName[status]}`} />
            <span className={styles.section__name}>{name}</span>
          </span>
          {(index + 1 !== array.length) && <span className={styles.trunk} />}
        </>
      ))}
    </span>
  );
}

export default Progress;
