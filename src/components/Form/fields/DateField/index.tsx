import React from 'react';
import { Field, FieldRenderProps } from 'react-final-form';

import styles from './DateField.module.scss';


interface Props {
  name: string,
}

function DateField({ name }: Props) {
  return (
    <Field name={name}>
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
