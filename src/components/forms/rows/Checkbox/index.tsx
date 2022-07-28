import React from 'react';
import { Field, FieldRenderProps } from 'react-final-form';

import styles from './Checkbox.module.scss';
import checked from '../../../../assets/images/checked.svg';
import unchecked from '../../../../assets/images/unchecked.svg';


interface Props {
  name: string,
  label: string,
}

function Checkbox({ name, label }: Props) {
  return (
    <Field name={name} type="checkbox">
      {({ input, meta }: FieldRenderProps<any, HTMLElement, any>) => (
        <>
          <label className={styles.label}>
            {label}
            <div className={styles.fieldWrapper}>
              <input
                {...input}
                name={input.name}
                value={input.value}
                onChange={input.onChange}
                className={styles.field}
              />
              <img src={checked} alt="выбрано" className={styles.checked} />
              <img src={unchecked} alt="не выбрано" className={styles.unchecked} />
            </div>

          </label>
          {meta.touched && meta.error && <span className="field-error">{meta.error}</span>}
        </>
      )}
    </Field>
  );
}

export default Checkbox;
