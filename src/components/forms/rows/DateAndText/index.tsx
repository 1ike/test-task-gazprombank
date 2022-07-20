import React from 'react';
import { FieldValidator } from 'final-form';

import styles from './DateAndText.module.scss';
import DateField from '../../fields/DateField';
import TextField from '../../fields/TextField';


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
        <TextField
          name={nameText}
          validate={validateText}
        />
      </div>
    </div>
  );
}

export default DateAndText;
