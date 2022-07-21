import React, { useContext, useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { uniqueId } from 'lodash';

import ButtonPrimary from '../../../../../uiKit/buttons/ButtonPrimary';
import ButtonSecondary from '../../../../../uiKit/buttons/ButtonSecondary';
import TextFieldsBlock from '../../../../fieldBlocks/TextFieldsBlock';
import DateField from '../../../../fields/DateField';
import TexAndText from '../../../../rows/TextAndText';
import Section from '../../Section';
import LicenseCard from '../LicenseCard';
import plusIcon from '../../../../../../assets/images/plus.svg';
import { Label } from '../shared';
import styles from './LicenseForms.module.scss';
import { License, Licenses, LicensesContext } from '../contexts/Licenses';
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
  input: { onChange: (licenses: Licenses) => void }
}

function LicenseForms({ input: { onChange } }: Props) {
  const { licenses, addOrUpdateLicense } = useContext(LicensesContext);

  const hasLicenses = licenses.length > 0;

  const [formIds, setformIds] = useState(hasLicenses ? [] : [uniqueId()]);

  const addForm = () => setformIds([...formIds, uniqueId()]);

  const onSubmit = (values: License) => {
    if (addOrUpdateLicense) addOrUpdateLicense(values);
  };

  useEffect(() => onChange(licenses), [onChange, licenses]);

  return (
    <>
      {formIds.map((id) => (
        <Form
          onSubmit={onSubmit}
          initialValues={{ id }}
          render={({
            handleSubmit, form: { reset },
          }) => {
            const deleteForm = () => {
              if (formIds.length > 1 || hasLicenses) {
                setformIds(formIds.filter((formId) => formId !== id));
              } else {
                reset();
              }
            };

            const submitForm = () => {
              handleSubmit();
              deleteForm();
            };

            return (
              <LicenseCard title="Добавить новую">
                <form>
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
                        <DateField
                          name="validityPeriod"
                          validate={required}
                        />
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
                </form>
                <div className={styles.buttonBlock}>
                  <ButtonPrimary
                    onClick={submitForm}
                    buttonClassName={styles.button}
                  >
                    Добавить
                  </ButtonPrimary>
                  <ButtonSecondary
                    onClick={deleteForm}
                    buttonClassName={styles.button}
                  >
                    Отменить
                  </ButtonSecondary>
                </div>
              </LicenseCard>
            );
          }}
          key={id}
        />
      ))}
      <ButtonSecondary
        onClick={addForm}
        buttonClassName={styles.addButton}
      >
        <img src={plusIcon} alt="" />
        Добавить ещё одну лицензию
      </ButtonSecondary>
    </>
  );
}

export default LicenseForms;
