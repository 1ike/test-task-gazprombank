import React, { useContext } from 'react';
import { Field, Form } from 'react-final-form';

import ButtonPrimary from '../../../../../uiKit/buttons/ButtonPrimary';
import ButtonSecondary from '../../../../../uiKit/buttons/ButtonSecondary';
import TextFieldsBlock from '../../../../fieldBlocks/TextFieldsBlock';
import DateField from '../../../../fields/DateField';
import TexAndText from '../../../../rows/TextAndText';
import Section from '../../Section';
import LicenseCard from '../LicenseCard';
import { Label } from '../shared';
import styles from './LicenseForm.module.scss';
import { License, LicenseID, LicensesContext } from '../contexts/Licenses';
import required from '../../../../validation/required';


const licenseSectionTextBlockData = [
  {
    name: 'kindOfActivity',
    label: Label.KindOfActivity,
    validate: required,
  },
  {
    name: 'issuer',
    label: Label.Issuer,
    validate: required,
  },
];

interface Props {
  initialValues: { id: LicenseID } | License,
  onCancel: (id: LicenseID, reset?: () => void) => void,
  edit?: boolean,
}

function LicenseForm({
  initialValues, initialValues: { id }, onCancel, edit,
}: Props) {
  const { addOrUpdateLicense } = useContext(LicensesContext);

  const onSubmit = (values: License) => {
    if (addOrUpdateLicense) addOrUpdateLicense(values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      mutators={{
        resetValidityPeriod: (args, state, utils) => {
          utils.changeValue(state, 'validityPeriod', () => undefined);
        },
      }}
      render={({
        handleSubmit, form: { reset, mutators },
      }) => {
        const cancel = () => {
          onCancel(id);
          reset();
        };

        const submitForm = () => {
          handleSubmit();
          cancel();
        };

        return (
          <LicenseCard title={edit ? 'Редактирование лицензии' : 'Добавить новую'}>
            <Section>
              <TexAndText
                label="Вид и номер документа"
                name1="type"
                name2="number"
                validate1={required}
                validate2={required}
              />
              <TextFieldsBlock data={licenseSectionTextBlockData} />
              <div className="form-section-row">
                <label className="form-section-row-label-base">
                  Дата выдачи документа и срок действия
                </label>
                <div className={styles.fields}>
                  <DateField
                    name="dateOfIssue"
                    validate={required}
                  />
                  <Field name="unlimited" subscription={{ value: true }}>
                    {({ input: { value } }) => {
                      if (value) setTimeout(() => mutators.resetValidityPeriod(), 0);

                      return (
                        <DateField
                          name="validityPeriod"
                          validate={required}
                          disabled={value}
                        />
                      );
                    }}
                  </Field>

                  <label className={styles.checkbox}>
                    <Field
                      name="unlimited"
                      component="input"
                      type="checkbox"
                      validate={required}
                      className={styles.checkbox__input}
                    />
                    Бессрочно
                  </label>
                </div>
              </div>
            </Section>
            <div className={styles.buttonBlock}>
              <ButtonPrimary
                onClick={submitForm}
                buttonClassName={styles.button}
              >
                {edit ? 'Сохранить изменения' : 'Добавить'}
              </ButtonPrimary>
              <ButtonSecondary
                onClick={cancel}
                buttonClassName={styles.button}
              >
                Отменить
              </ButtonSecondary>
            </div>
          </LicenseCard>
        );
      }}
    />
  );
}

export default LicenseForm;
