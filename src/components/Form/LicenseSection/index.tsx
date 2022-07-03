import React from 'react';
import { Field } from 'react-final-form';

import styles from './LicenseSection.module.scss';
import Card from '../../uiKit/Card';
import TextFieldsBlock from '../fieldBlocks/TextFieldsBlock';
import Checkbox from '../rows/Checkbox';
import TexAndText from '../rows/TextAndText';
import Section from '../Section';
import DateField from '../fields/DateField';
import ButtonPrimary from '../../uiKit/buttons/ButtonPrimary';
import ButtonSecondary from '../../uiKit/buttons/ButtonSecondary';


interface Props {
  containerClassName?: string,
}

const licenseSectionScopeName = 'license';
const licenseSectionData = [
  {
    name: `${licenseSectionScopeName}.website`,
    label: 'Вид деятельности',
  },
  {
    name: `${licenseSectionScopeName}.issuer`,
    label: 'Кем выдан документ',
  },
];

function LicenseSection({ containerClassName }: Props) {
  return (
    <Section containerClassName={containerClassName}>
      <Checkbox
        label="Моя компания осуществляет деятельность, подлежащую лицензированию в соответствии с законодательством РФ"
        name="licenses"
      />
      <Card>
        <h3 className={styles.cardsHeader}>Добавить новую</h3>
        <Section>
          <TexAndText
            label="Вид и номер документа"
            name1={`${licenseSectionScopeName}.type`}
            name2={`${licenseSectionScopeName}.number`}
          />

          <TextFieldsBlock data={licenseSectionData} />

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
          <ButtonPrimary buttonClassName={styles.button}>Добавить</ButtonPrimary>
          <ButtonSecondary buttonClassName={styles.button}>Отменить</ButtonSecondary>
        </div>
      </Card>
    </Section>
  );
}

export default LicenseSection;
