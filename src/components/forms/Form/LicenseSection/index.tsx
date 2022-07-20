import React from 'react';
import { Field } from 'react-final-form';

import styles from './LicenseSection.module.scss';
import Card from '../../../uiKit/Card';
import TextFieldsBlock from '../../fieldBlocks/TextFieldsBlock';
import Checkbox from '../../rows/Checkbox';
import TexAndText from '../../rows/TextAndText';
import DateField from '../../fields/DateField';
import ButtonPrimary from '../../../uiKit/buttons/ButtonPrimary';
import ButtonSecondary from '../../../uiKit/buttons/ButtonSecondary';
import ButtonClear from '../../../uiKit/buttons/ButtonClear';
import Section from '../Section';
import LicenseViewBlock from './LicenseViewBlock';
import editIcon from '../../../../assets/images/edit.svg';
import deleteIcon from '../../../../assets/images/delete.svg';
import plusIcon from '../../../../assets/images/plus.svg';


enum Label {
  Document = 'Вид и номер документа',
  KindOfActivity = 'Вид деятельности',
  Issuer = 'Кем выдан документ',
  Period = 'Дата выдачи документа и срок действия',
}

const licenseSectionScopeName = 'license';
const licenseSectionData = [
  {
    name: `${licenseSectionScopeName}.kindOfActivity`,
    label: Label.KindOfActivity,
  },
  {
    name: `${licenseSectionScopeName}.issuer`,
    label: Label.Issuer,
  },
];

const licenses = [
  {
    type: 'Свидетельство СРО',
    number: 'ЛО-40-01-001077',
    kindOfActivity: 'Деятельности по монтажу, техническому обслуживанию и ремонту средств обеспечения пожарной безопасности зданий и сооружений.',
    issuer: 'Комиссией по выдаче лицензий',
    dateOfIssue: '2006-04-20',
    validityPeriod: '2026-04-19',
    unlimited: false,
  },
];

const formatDate = (datestring: string) => {
  const date = new Date(datestring);
  const formatter = new Intl.DateTimeFormat('ru');

  return formatter.format(date);
};
const transformedData = licenses.map((license) => ([
  { label: Label.Document, value: `${license.type}, № ${license.number}` },
  { label: Label.KindOfActivity, value: license.kindOfActivity },
  { label: Label.Issuer, value: license.issuer },
  { label: Label.Period, value: `${formatDate(license.dateOfIssue)} — ${formatDate(license.validityPeriod)}` },
]));


interface Props {
  containerClassName?: string,
}

function LicenseSection({ containerClassName }: Props) {
  return (
    <div className={containerClassName}>
      <Checkbox
        label="Моя компания осуществляет деятельность, подлежащую лицензированию в соответствии с законодательством РФ"
        name="licenses"
      />
      <div className={styles.cards}>
        <h3 className={styles.cardsHeader}>Ваши лицензии:</h3>
        <Card className={styles.card}>
          <h4 className={styles.formCardHeader}>
            Лицензия №
            {' '}
            {licenses[0].number}
          </h4>
          <Section>
            <LicenseViewBlock data={transformedData[0]} />
          </Section>
          <div className={styles.viewButtons}>
            <ButtonClear>
              <img src={editIcon} alt="" />
              Редактировать
            </ButtonClear>
            <ButtonClear>
              <img src={deleteIcon} alt="" />
              Удалить
            </ButtonClear>
          </div>
        </Card>
        <Card className={styles.card}>
          <h4 className={styles.formCardHeader}>Добавить новую</h4>
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
        <ButtonSecondary buttonClassName={styles.addButton}>
          <img src={plusIcon} alt="" />
          Добавить ещё одну лицензию
        </ButtonSecondary>
      </div>
    </div>
  );
}

export default LicenseSection;
