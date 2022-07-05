import React from 'react';
import { FieldValidator } from 'final-form';

import styles from './TextAndText.module.scss';
import TextField from '../../fields/TextField';


interface Props {
  name1: string,
  name2: string,
  label: string,
  validate1?: FieldValidator<string>,
  validate2?: FieldValidator<string>,
}

function TextAndText({
  name1, name2, label, validate1, validate2,
}: Props) {
  return (
    <div className="form-section-row">
      <label className="form-section-row-label-base">{label}</label>
      <div className={styles.fields}>
        <TextField
          name={name1}
          validate={validate1}
        />
        <TextField
          name={name2}
          validate={validate2}
        />
      </div>
    </div>
  );
}

export default TextAndText;
