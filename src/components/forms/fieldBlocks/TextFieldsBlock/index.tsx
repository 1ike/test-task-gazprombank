import React from 'react';
import { FieldValidator } from 'final-form';

import TextRow from '../../rows/Text';
import styles from './TextFieldsBlock.module.scss';


interface FieldData {
  name: string,
  label: string,
  validate?: FieldValidator<string>,
}

interface Props {
  data: FieldData[],
}

function TextFieldsBlock({ data }: Props) {
  return (
    <div className={styles.fields}>
      {data.map(({ name, label, validate }) => (
        <TextRow name={name} label={label} key={name} validate={validate} />
      ))}
    </div>
  );
}

export default TextFieldsBlock;
