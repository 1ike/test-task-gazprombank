import React from 'react';

import Section from './Section';
import TextFieldsBlock from '../../fieldBlocks/TextFieldsBlock';
import DateAndText from '../../rows/DateAndText';
import required from '../../validation/required';


const infoSectionScopeName = 'info';
const infoSectionData1 = [
  {
    name: `${infoSectionScopeName}.inn`,
    label: 'ИНН, ОГРН или ОГРНИП',
    validate: required,
  },
  {
    name: `${infoSectionScopeName}.fullname`,
    label: 'Фамилия, имя и отчество',
    validate: required,
  },
];
const infoSectionData2 = [
  {
    name: `${infoSectionScopeName}.citizenship`,
    label: 'Гражданство',
    validate: required,
  },
  {
    name: `${infoSectionScopeName}.snils`,
    label: 'СНИЛС (при наличии)',
    validate: required,
  },
  {
    name: `${infoSectionScopeName}.registrationAddress`,
    label: 'Адрес места жительства (регистрации)',
    validate: required,
  },
  {
    name: `${infoSectionScopeName}.actualAddress`,
    label: 'Адрес места пребывания (если отличается от места жительства)',
    validate: required,
  },
];

function InfoSection({ containerClassName }: { containerClassName?: string }) {
  return (
    <Section
      headerText="Общая информация"
      containerClassName={containerClassName}
    >
      <TextFieldsBlock data={infoSectionData1} />
      <DateAndText
        label="Дата и место рождения"
        nameDate={`${infoSectionScopeName}.birthdate`}
        nameText={`${infoSectionScopeName}.birthplace`}
        validateDate={required}
        validateText={required}
      />
      <TextFieldsBlock data={infoSectionData2} />
    </Section>

  );
}

export default InfoSection;
