import React from 'react';
import { FieldValidator } from 'final-form';
import { Field, FieldRenderProps } from 'react-final-form';
import cn from 'classnames';

import styles from './TextField.module.scss';


interface Props extends React.DetailedHTMLProps<
React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement
> {
  name: string,
  validate?: FieldValidator<string>,
  inputClassName?: string,
}

function TextField({ name, validate, inputClassName }: Props) {
  return (
    <Field name={name} validate={validate}>
      {({ input, meta }: FieldRenderProps<any, HTMLElement, any>) => (
        <div className={styles.container}>
          <input
            name={input.name}
            value={input.value}
            onChange={input.onChange}
            type="text"
            className={cn('form-section-row-field ', inputClassName)}
          />
          {meta.touched && meta.error && <span className="field-error">{meta.error}</span>}
        </div>
      )}
    </Field>
  );
}

export default TextField;
