import React, { useState } from 'react';
import { Form } from 'react-final-form';

import styles from './Form.module.scss';
import Progress, { ProgressStatus } from './Progress';
import Section from './Section';
import TextFieldsBlock from './fieldBlocks/TextFieldsBlock';
import DateAndText from './rows/DateAndText';
import CheckboxFieldsBlock from './fieldBlocks/CheckboxFieldsBlock';
import ButtonPrimary from '../uiKit/buttons/ButtonPrimary';
import LicenseSection from './LicenseSection';
import Modal from '../uiKit/Modal';


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
const infoSectionData1 = [
  {
    name: `${infoSectionScopeName}.inn`,
    label: 'ИНН, ОГРН или ОГРНИП',
  },
  {
    name: `${infoSectionScopeName}.fullname`,
    label: 'Фамилия, имя и отчество',
  },
];
const infoSectionData2 = [
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

const registrationSectionScopeName = 'registration';
const registrationSectionData = [
  {
    name: `${registrationSectionScopeName}.place`,
    label: 'Место регистрации',
  },
];

const questionnaireSectionScopeName = 'questionnaire';
const questionnaireSectionData = [
  {
    name: `${questionnaireSectionScopeName}.website`,
    label: 'Предоставление услуг с использованием сайта в сети Интернет',
  },
  {
    name: `${questionnaireSectionScopeName}.pdl`,
    label: 'Статус публичного должностного лица (ПДЛ)',
  },
  {
    name: `${questionnaireSectionScopeName}.beneficiaries`,
    label: 'Наличие выгодоприобретателей',
  },
  {
    name: `${questionnaireSectionScopeName}.representatives`,
    label: 'Наличие представителей',
  },
  {
    name: `${questionnaireSectionScopeName}.beneficialOwner`,
    label: 'Наличие бенефициарного владельца',
  },
];

function FormContent() {
  const [modalActive, setModalActive] = useState(false);
  const closeModal = () => setModalActive(false);

  const [formData, setFormData] = useState({});
  const onSubmit = (values: Record<string, any>) => {
    setFormData(values);
    setModalActive(true);
  };

  return (
    <Form
      onSubmit={onSubmit}
      // initialValues={{ stooge: 'larry', employed: false }}
      render={({
        handleSubmit,
      }) => (
        <div className={styles.content}>
          <form className={styles.form}>
            <Section headerText="Общая информация">
              <TextFieldsBlock data={infoSectionData1} />
              <DateAndText
                label="Дата и место рождения"
                nameDate={`${infoSectionScopeName}.birthdate`}
                nameText={`${infoSectionScopeName}.birthplace`}
              />
              <TextFieldsBlock data={infoSectionData2} />
            </Section>

            <Section
              headerText="Сведения о регистрации в качестве индивидуального предпринимателя"
              containerClassName={styles.sectionMargin}
            >
              <DateAndText
                label="Дата и номер"
                nameDate={`${registrationSectionScopeName}.date`}
                nameText={`${registrationSectionScopeName}.number`}
              />
              <TextFieldsBlock data={registrationSectionData} />
            </Section>

            <LicenseSection containerClassName={styles.sectionMargin} />

            <Section containerClassName={styles.questionnaireSectionMargin}>
              <CheckboxFieldsBlock data={questionnaireSectionData} />
            </Section>

            <ButtonPrimary
              onClick={handleSubmit}
              buttonClassName={styles.submitButton}
            >
              Перейти к формированию документов
            </ButtonPrimary>
          </form>
          <Progress headerText="Заполнение анкеты" data={data} />
          <Modal modalActive={modalActive} onClose={closeModal}>
            <pre>{JSON.stringify(formData, null, ' ')}</pre>
          </Modal>
        </div>
      )}
    />
  );
}

export default FormContent;
