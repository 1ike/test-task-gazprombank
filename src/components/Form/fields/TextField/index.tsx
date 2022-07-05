import React from 'react';
import { FieldValidator } from 'final-form';
import { Field, FieldRenderProps } from 'react-final-form';

import styles from './TextField.module.scss';


interface Props {
  name: string,
  validate?: FieldValidator<string>,
}

function TextField({ name, validate }: Props) {
  return (
    <Field name={name} validate={validate}>
      {({ input, meta }: FieldRenderProps<any, HTMLElement, any>) => (
        <div className={styles.container}>
          <input
            name={input.name}
            value={input.value}
            onChange={input.onChange}
            type="text"
            className="form-section-row-field"
          />
          {meta.touched && meta.error && <span className="field-error">{meta.error}</span>}
        </div>
      )}
    </Field>
  );
}

export default TextField;
