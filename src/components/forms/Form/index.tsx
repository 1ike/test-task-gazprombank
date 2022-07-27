import React, { useState } from 'react';
import { Form } from 'react-final-form';
import { omit } from 'lodash';

import styles from './Form.module.scss';
import ButtonPrimary from '../../uiKit/buttons/ButtonPrimary';
import LicenseSection, { licensesSwitchName } from './sections/LicenseSection';
import { LicensesProvider } from './sections/LicenseSection/contexts/Licenses';
import Modal from '../../uiKit/Modal';
import QuestionnaireSection from './sections/QuestionnaireSection';
import InfoSection from './sections/InfoSection';
import RegistrationSection from './sections/RegistrationSection';
import FormProgress from './FormProgress';


function FormContent() {
  const [modalActive, setModalActive] = useState(false);
  const closeModal = () => setModalActive(false);

  const [formData, setFormData] = useState({});
  const onSubmit = (values: Record<string, any>) => {
    setFormData(omit(
      values,
      [licensesSwitchName, values.licenses?.length > 0 ? '' : 'licenses'],
    ));
    setModalActive(true);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({
        handleSubmit,
      }) => (
        <div className={styles.content}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <InfoSection />

            <RegistrationSection containerClassName={styles.sectionMargin} />

            <LicensesProvider>
              <LicenseSection containerClassName={styles.sectionMargin} />
            </LicensesProvider>

            <QuestionnaireSection containerClassName={styles.questionnaireSectionMargin} />

            <ButtonPrimary
              type="submit"
              buttonClassName={styles.submitButton}
            >
              Перейти к формированию документов
            </ButtonPrimary>
          </form>

          <FormProgress />

          <Modal modalActive={modalActive} onClose={closeModal}>
            <pre>{JSON.stringify(formData, null, ' ')}</pre>
          </Modal>
        </div>
      )}
    />
  );
}

export default FormContent;
