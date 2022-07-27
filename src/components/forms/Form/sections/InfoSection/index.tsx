import React from 'react';

import Section from '../Section';
import TextFieldsBlock from '../../../fieldBlocks/TextFieldsBlock';
import DateAndText from '../../../rows/DateAndText';
import required from '../../../validation/required';
import styles from './InfoSection.module.scss';
import { makeFieldPathGetter } from '../lib';


export const infoSectionScopeName = 'info';
export enum InfoSectionFieldName {
  inn = 'inn',
  fullname = 'fullname',
  citizenship = 'citizenship',
  snils = 'snils',
  registrationAddress = 'registrationAddress',
  actualAddress = 'actualAddress',
  birthdate = 'birthdate',
  birthplace = 'birthplace',
}

const getPath = makeFieldPathGetter<typeof infoSectionScopeName, InfoSectionFieldName>(
  infoSectionScopeName,
);

export const infoSectionPaths = {
  [InfoSectionFieldName.inn]: getPath(InfoSectionFieldName.inn),
  [InfoSectionFieldName.fullname]: getPath(InfoSectionFieldName.fullname),
  [InfoSectionFieldName.citizenship]: getPath(InfoSectionFieldName.citizenship),
  [InfoSectionFieldName.snils]: getPath(InfoSectionFieldName.snils),
  [InfoSectionFieldName.registrationAddress]: getPath(InfoSectionFieldName.registrationAddress),
  [InfoSectionFieldName.actualAddress]: getPath(InfoSectionFieldName.actualAddress),
  [InfoSectionFieldName.birthdate]: getPath(InfoSectionFieldName.birthdate),
  [InfoSectionFieldName.birthplace]: getPath(InfoSectionFieldName.birthplace),
};


const infoSectionData1 = [
  {
    name: infoSectionPaths.inn,
    label: 'ИНН, ОГРН или ОГРНИП',
    validate: required,
    inputClassName: styles.innInput,
  },
  {
    name: infoSectionPaths.fullname,
    label: 'Фамилия, имя и отчество',
    validate: required,
  },
];
const infoSectionData2 = [
  {
    name: infoSectionPaths.citizenship,
    label: 'Гражданство',
    validate: required,
  },
  {
    name: infoSectionPaths.snils,
    label: 'СНИЛС (при наличии)',
    validate: required,
  },
  {
    name: infoSectionPaths.registrationAddress,
    label: 'Адрес места жительства (регистрации)',
    validate: required,
  },
  {
    name: infoSectionPaths.actualAddress,
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
        nameDate={infoSectionPaths.birthdate}
        nameText={infoSectionPaths.birthplace}
        validateDate={required}
        validateText={required}
      />
      <TextFieldsBlock data={infoSectionData2} />
    </Section>

  );
}

export default InfoSection;
