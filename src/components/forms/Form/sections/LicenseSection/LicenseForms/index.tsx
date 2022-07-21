import React, { useState } from 'react';
import { Field } from 'react-final-form';
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
import { LicenseID } from '../contexts/Licenses';


const licenseSectionScopeName = 'license';
const licenseSectionTextBlockData = [
  {
    name: `${licenseSectionScopeName}.kindOfActivity`,
    label: Label.KindOfActivity,
  },
  {
    name: `${licenseSectionScopeName}.issuer`,
    label: Label.Issuer,
  },
];


function LicenseForms() {
  const [formIds, setformIds] = useState([uniqueId()]);

  const addForm = () => setformIds([...formIds, uniqueId()]);
  const deleteForm = (id: LicenseID) => () => {
    if (formIds.length > 1) {
      setformIds(formIds.filter((formId) => formId !== id));
    }
  };

  return (
    <>
      {formIds.map((id) => (
        <LicenseCard title="Добавить новую" key={id}>
          <Section>
            <TexAndText
              label="Вид и номер документа"
              name1={`${licenseSectionScopeName}.type`}
              name2={`${licenseSectionScopeName}.number`}
            />
            <TextFieldsBlock data={licenseSectionTextBlockData} />
            <div className="form-section-row">
              <label className="form-section-row-label-base">
                Дата выдачи документа и срок действия
              </label>
              <div className={styles.fields}>
                <DateField
                  name={`${licenseSectionScopeName}.dateOfIssue`}
                />
                <DateField
                  name={`${licenseSectionScopeName}.validityPeriod`}
                />
                <label className={styles.checkbox}>
                  <Field
                    name={`${licenseSectionScopeName}.unlimited`}
                    component="input"
                    type="checkbox"
                    className={styles.checkbox__input}
                  />
                  Бессрочно
                </label>
              </div>
            </div>
          </Section>
          <div className={styles.buttonBlock}>
            <ButtonPrimary
              onClick={addForm}
              buttonClassName={styles.button}
            >
              Добавить
            </ButtonPrimary>
            <ButtonSecondary
              onClick={deleteForm(id)}
              buttonClassName={styles.button}
            >
              Отменить
            </ButtonSecondary>
          </div>
        </LicenseCard>
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
