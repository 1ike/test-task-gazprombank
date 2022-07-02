import React from 'react';
import { Field } from 'react-final-form';

import styles from './DateAndText.module.scss';
import DateField from '../../fields/DateField';


interface Props {
  nameDate: string,
  nameText: string,
  label: string,
}

function DateAndText({ nameDate, nameText, label }: Props) {
  return (
    <div className="form-section-row">
      <label className="form-section-row-label-base">{label}</label>
      <div className={styles.fields}>
        <DateField
          name={nameDate}
        />
        <Field
          name={nameText}
          component="input"
          type="text"
          className="form-section-row-field-base"
        />
      </div>
    </div>
  );
}

export default DateAndText;
