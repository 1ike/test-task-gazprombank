import React from 'react';
import { Field } from 'react-final-form';

import styles from './LicenseSection.module.scss';
import TextFieldsBlock from '../../../fieldBlocks/TextFieldsBlock';
import Checkbox from '../../../rows/Checkbox';
import TexAndText from '../../../rows/TextAndText';
import DateField from '../../../fields/DateField';
import ButtonPrimary from '../../../../uiKit/buttons/ButtonPrimary';
import ButtonSecondary from '../../../../uiKit/buttons/ButtonSecondary';
import Section from '../Section';
import plusIcon from '../../../../../assets/images/plus.svg';
import LicenseCard from './LicenseCard';
import Licenses from './Licenses';
import { Label } from './shared';


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
        <Licenses />
        <LicenseCard title="Добавить новую">
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
            <ButtonPrimary buttonClassName={styles.button}>Добавить</ButtonPrimary>
            <ButtonSecondary buttonClassName={styles.button}>Отменить</ButtonSecondary>
          </div>
        </LicenseCard>
        <ButtonSecondary buttonClassName={styles.addButton}>
          <img src={plusIcon} alt="" />
          Добавить ещё одну лицензию
        </ButtonSecondary>
      </div>
    </div>
  );
}

export default LicenseSection;
