import React from 'react';
import { Field } from 'react-final-form';
import { FieldValidator } from 'final-form';

import styles from './DateAndText.module.scss';
import DateField from '../../fields/DateField';


interface Props {
  nameDate: string,
  nameText: string,
  label: string,
  validateDate?: FieldValidator<string>,
  validateText?: FieldValidator<string>,
}

function DateAndText({
  nameDate, nameText, label, validateDate, validateText,
}: Props) {
  return (
    <div className="form-section-row">
      <label className="form-section-row-label-base">{label}</label>
      <div className={styles.fields}>
        <DateField
          name={nameDate}
          validate={validateDate}
        />
        <Field
          name={nameText}
          component="input"
          type="text"
          className="form-section-row-field-base"
          validate={validateText}
        />
      </div>
    </div>
  );
}

export default DateAndText;
