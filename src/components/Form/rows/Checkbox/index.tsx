import React from 'react';
import { Field } from 'react-final-form';

import styles from './Checkbox.module.scss';
import checked from '../../../../assets/images/checked.svg';
import unchecked from '../../../../assets/images/unchecked.svg';


interface Props {
  name: string,
  label: string,
}

function Checkbox({ name, label }: Props) {
  return (
    <label className={styles.label}>
      {label}
      <div className={styles.fieldWrapper}>
        <Field
          name={name}
          component="input"
          type="checkbox"
          className={styles.field}
        />
        <img src={checked} alt="выбрано" className={styles.checked} />
        <img src={unchecked} alt="не выбрано" className={styles.unchecked} />
      </div>
    </label>
  );
}

export default Checkbox;
