import React from 'react';

import CheckboxRow from '../../rows/Checkbox';
import styles from './CheckboxFieldsBlock.module.scss';


interface FieldData {
  name: string,
  label: string,
}

interface Props {
  data: FieldData[],
}

function CheckboxFieldsBlock({ data }: Props) {
  return (
    <div className={styles.fields}>
      {data.map(({ name, label }) => (
        <CheckboxRow name={name} label={label} key={name} />
      ))}
    </div>
  );
}

export default CheckboxFieldsBlock;
