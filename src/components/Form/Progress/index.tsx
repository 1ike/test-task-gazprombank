import React from 'react';

import styles from './Progress.module.scss';


export enum SectionName {
  Info = 'Информация',
  Registration = 'Сведения',
  Licenses = 'Лицензии',
  Questionnaire = 'Опросник',
}

export enum ProgressStatus {
  InProgress = 'InProgress',
  Success = 'Success',
  Error = 'Error',
}

export interface Statuses {
  [SectionName.Info]: ProgressStatus,
  [SectionName.Registration]: ProgressStatus,
  [SectionName.Licenses]: ProgressStatus,
  [SectionName.Questionnaire]: ProgressStatus,
}

interface Props {
  headerText: string,
  names: SectionName[],
  statuses: Statuses,
}

function Progress({ headerText, names, statuses }: Props) {
  const statusModificatorClassNamePrefix = 'section__status--';
  const statusModificatorClassName = {
    [ProgressStatus.InProgress]: styles[`${statusModificatorClassNamePrefix}inProgress`],
    [ProgressStatus.Success]: styles[`${statusModificatorClassNamePrefix}success`],
    [ProgressStatus.Error]: styles[`${statusModificatorClassNamePrefix}error`],
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>{headerText}</h3>
      {names.map((name, index, array) => (
        <div key={name}>
          <div className={styles.section}>
            <div className={`${styles.section__status} ${statusModificatorClassName[statuses[name]]}`} />
            <span className={styles.section__name}>{name}</span>
          </div>
          {(index + 1 !== array.length) && <div className={styles.trunk} />}
        </div>
      ))}
    </div>
  );
}

export default Progress;
