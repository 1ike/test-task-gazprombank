import React, { useState } from 'react';
import { Form } from 'react-final-form';

import styles from './Form.module.scss';
import Progress, { ProgressStatus, SectionName, Statuses } from './Progress';
import ButtonPrimary from '../../uiKit/buttons/ButtonPrimary';
import LicenseSection from './sections/LicenseSection';
import Modal from '../../uiKit/Modal';
import QuestionnaireSection from './sections/QuestionnaireSection';
import InfoSection from './sections/InfoSection';
import RegistrationSection from './sections/RegistrationSection';


const sectionNames = [
  SectionName.Info,
  SectionName.Registration,
  SectionName.Licenses,
  SectionName.Questionnaire,
];

const sectionProgressStatuses = sectionNames.reduce(
  (acc, name) => ({ ...acc, [name]: ProgressStatus.InProgress }),
  {} as Statuses,
);


function FormContent() {
  const [modalActive, setModalActive] = useState(false);
  const closeModal = () => setModalActive(false);

  const [formData, setFormData] = useState({});
  const onSubmit = (values: Record<string, any>) => {
    setFormData(values);
    setModalActive(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [progressStatuses, setProgressStatuses] = useState(sectionProgressStatuses);

  return (
    <Form
      onSubmit={onSubmit}
      // initialValues={{ stooge: 'larry', employed: false }}
      render={({
        handleSubmit,
      }) => (
        <div className={styles.content}>
          <form className={styles.form}>
            <InfoSection />

            <RegistrationSection containerClassName={styles.sectionMargin} />

            <LicenseSection containerClassName={styles.sectionMargin} />

            <QuestionnaireSection containerClassName={styles.questionnaireSectionMargin} />

            <ButtonPrimary
              onClick={handleSubmit}
              buttonClassName={styles.submitButton}
            >
              Перейти к формированию документов
            </ButtonPrimary>
          </form>
          <Progress
            headerText="Заполнение анкеты"
            names={sectionNames}
            statuses={progressStatuses}
          />
          <Modal modalActive={modalActive} onClose={closeModal}>
            <pre>{JSON.stringify(formData, null, ' ')}</pre>
          </Modal>
        </div>
      )}
    />
  );
}

export default FormContent;
