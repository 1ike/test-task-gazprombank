import React from 'react';
import { FieldValidator } from 'final-form';
import { Field, FieldRenderProps } from 'react-final-form';

import styles from './DateField.module.scss';


interface Props extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement
> {
  name: string,
  validate?: FieldValidator<string>,
}

function DateField({ name, validate, disabled }: Props) {
  return (
    <Field name={name} validate={validate}>
      {({ input, meta }: FieldRenderProps<any, HTMLElement, any>) => (
        <div className={styles.container}>
          <input
            {...input}
            name={input.name}
            value={input.value}
            onChange={input.onChange}
            type="date"
            className="form-section-row-field"
            disabled={disabled}
          />
          {meta.touched && meta.error && <span className="field-error">{meta.error}</span>}
        </div>
      )}
    </Field>
  );
}

export default DateField;
