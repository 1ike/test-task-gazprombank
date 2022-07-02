import React from 'react';
import { Form } from 'react-final-form';

import styles from './Form.module.scss';
import Progress, { ProgressStatus } from './Progress';
import Section from './Section';
import TextFieldsBlock from './Section/TextFieldsBlock';
import DateAndText from './Section/rows/DateAndText';
// import avatar from '../../../assets/images/avatar.svg';


// interface ButtonProps {
//   children: React.ReactNode,
// }

enum SectionName {
  Info = 'Информация',
  Registration = 'Сведения',
  Licenses = 'Лицензии',
  Questionnaire = 'Опросник',
}


const data = [
  {
    name: SectionName.Info,
    status: ProgressStatus.InProgress,
  },
  {
    name: SectionName.Registration,
    status: ProgressStatus.InProgress,
  },
  {
    name: SectionName.Licenses,
    status: ProgressStatus.Success,
  },
  {
    name: SectionName.Questionnaire,
    status: ProgressStatus.Error,
  },
];

const infoSectionScopeName = 'info';
const infoSectionData = [
  {
    name: `${infoSectionScopeName}.inn`,
    label: 'ИНН, ОГРН или ОГРНИП',
  },
  {
    name: `${infoSectionScopeName}.fullname`,
    label: 'Фамилия, имя и отчество',
  },
  {
    name: `${infoSectionScopeName}.citizenship`,
    label: 'Гражданство',
  },
  {
    name: `${infoSectionScopeName}.snils`,
    label: 'СНИЛС (при наличии)',
  },
  {
    name: `${infoSectionScopeName}.registrationAddress`,
    label: 'Адрес места жительства (регистрации)',
  },
  {
    name: `${infoSectionScopeName}.actualAddress`,
    label: 'Адрес места пребывания (если отличается от места жительства)',
  },
];

function FormContent() {
  return (
    <Form
      onSubmit={(values) => { console.log('values = ', values); }}
      // initialValues={{ stooge: 'larry', employed: false }}
      render={({
        handleSubmit,
      }) => (
        <div className={styles.content}>
          <form className={styles.form}>
            <Section headerText="Общая информация">
              <TextFieldsBlock data={infoSectionData} />
              <DateAndText
                label="Дата и место рождения"
                nameDate={`${infoSectionScopeName}.birthdate`}
                nameText={`${infoSectionScopeName}.birthplace`}
              />
            </Section>
            <button type="button" onClick={handleSubmit}>Submit</button>
          </form>
          <Progress headerText="Заполнение анкеты" data={data} />
        </div>
      )}
    />
  );
}

export default FormContent;
