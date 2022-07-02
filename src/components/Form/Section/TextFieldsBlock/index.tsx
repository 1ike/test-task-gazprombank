import React from 'react';

import TextRow from '../rows/Text';
import styles from './TextFieldsBlock.module.scss';


interface FieldData {
  name: string,
  label: string,
}

interface Props {
  data: FieldData[],
}

function TextFieldsBlock({ data }: Props) {
  return (
    <div className={styles.fields}>
      {data.map(({ name, label }) => (
        <TextRow name={name} label={label} key={name} />
      ))}
    </div>
  );
}

export default TextFieldsBlock;
