import React, { useState } from 'react';

import Progress, { ProgressStatus } from '../../Progress';


export enum SectionName {
  Info = 'Информация',
  Registration = 'Сведения',
  Licenses = 'Лицензии',
  Questionnaire = 'Опросник',
}

const sectionNames = [
  SectionName.Info,
  SectionName.Registration,
  SectionName.Licenses,
  SectionName.Questionnaire,
];

const sectionProgressStatuses = sectionNames.reduce(
  (acc, name) => {
    acc.set(name, ProgressStatus.InProgress);
    return acc;
  },
  new Map(),
);


function FormProgress() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [progressStatuses, setProgressStatuses] = useState(sectionProgressStatuses);

  return (
    <Progress<SectionName> headerText="Заполнение анкеты" statuses={sectionProgressStatuses} />
  );
}

export default FormProgress;
