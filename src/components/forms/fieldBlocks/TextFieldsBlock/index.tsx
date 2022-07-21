import React from 'react';
import { FieldValidator } from 'final-form';

import TextRow from '../../rows/Text';
import styles from './TextFieldsBlock.module.scss';


interface FieldData {
  name: string,
  label: string,
  validate?: FieldValidator<string>,
  inputClassName?: string,
}

interface Props {
  data: FieldData[],
}

function TextFieldsBlock({ data }: Props) {
  return (
    <div className={styles.fields}>
      {data.map(({
        name, label, validate, inputClassName,
      }) => (
        <TextRow
          name={name}
          label={label}
          key={name}
          validate={validate}
          inputClassName={inputClassName}
        />
      ))}
    </div>
  );
}

export default TextFieldsBlock;
