import React from 'react';
import { Field } from 'react-final-form';

import styles from './TextAndText.module.scss';


interface Props {
  name1: string,
  name2: string,
  label: string,
}

function TextAndText({ name1, name2, label }: Props) {
  return (
    <div className="form-section-row">
      <label className="form-section-row-label-base">{label}</label>
      <div className={styles.fields}>
        <Field
          name={name1}
          component="input"
          type="text"
          className="form-section-row-field-base"
        />
        <Field
          name={name2}
          component="input"
          type="text"
          className="form-section-row-field-base"
        />
      </div>
    </div>
  );
}

export default TextAndText;
