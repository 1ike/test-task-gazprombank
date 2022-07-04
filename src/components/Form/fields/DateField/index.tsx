import React from 'react';
import { FieldValidator } from 'final-form';
import { Field, FieldRenderProps } from 'react-final-form';

import styles from './DateField.module.scss';


interface Props {
  name: string,
  validate?: FieldValidator<string>,
}

function DateField({ name, validate }: Props) {
  return (
    <Field name={name} validate={validate}>
      {(props: FieldRenderProps<any, HTMLElement, any>) => (
        <input
          name={props.input.name}
          value={props.input.value}
          onChange={props.input.onChange}
          type="date"
          className={styles.input}
        />
      )}
    </Field>
  );
}

export default DateField;
