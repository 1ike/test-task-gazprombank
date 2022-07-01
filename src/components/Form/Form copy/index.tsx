import React from 'react';

// import styles from './Progress.module.scss';
// import avatar from '../../../assets/images/avatar.svg';

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
  return (
    <>
      <span>{headerText}</span>
      {data.map(({ name, status }) => (
        <>
          {status}
          <span>{name}</span>
        </>
      ))}
    </>
  );
}

export default Progress;
