import React, { useState } from 'react';
import { useFormState } from 'react-final-form';


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
  const formState = useFormState();
  console.log('formState = ', formState);
  if (formState?.touched?.['registration.number']) console.log(' t= ');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [progressStatuses, setProgressStatuses] = useState(sectionProgressStatuses);

  return (
    <div>
      <Progress<SectionName> headerText="Заполнение анкеты" statuses={sectionProgressStatuses} />
      <button type="button" onClick={() => console.log('formState = ', formState)}>111</button>
    </div>
  );
}

export default FormProgress;
