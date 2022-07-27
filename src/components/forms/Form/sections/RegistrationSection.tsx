import React from 'react';

import Section from './Section';
import TextFieldsBlock from '../../fieldBlocks/TextFieldsBlock';
import DateAndText from '../../rows/DateAndText';
import required from '../../validation/required';
import { makeFieldPathGetter } from './lib';


export const registrationSectionScopeName = 'registration';
export enum RegistrationSectionFieldName {
  place = 'place',
  date = 'date',
  number = 'number',
}

const getPath = makeFieldPathGetter<
  typeof registrationSectionScopeName, RegistrationSectionFieldName
>(registrationSectionScopeName);

export const registrationSectionPaths = {
  [RegistrationSectionFieldName.place]: getPath(RegistrationSectionFieldName.place),
  [RegistrationSectionFieldName.date]: getPath(RegistrationSectionFieldName.date),
  [RegistrationSectionFieldName.number]: getPath(RegistrationSectionFieldName.number),
};

const registrationSectionData = [
  {
    name: registrationSectionPaths.place,
    label: 'Место регистрации',
    validate: required,
  },
];


function RegistrationSection({ containerClassName }: { containerClassName?: string }) {
  return (
    <Section
      headerText="Сведения о регистрации в качестве индивидуального предпринимателя"
      containerClassName={containerClassName}
    >
      <DateAndText
        label="Дата и номер"
        nameDate={`${registrationSectionScopeName}.date`}
        nameText={`${registrationSectionScopeName}.number`}
        validateDate={required}
        validateText={required}
      />
      <TextFieldsBlock data={registrationSectionData} />
    </Section>
  );
}

export default RegistrationSection;
