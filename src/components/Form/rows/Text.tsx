import React from 'react';
import { FieldValidator } from 'final-form';

import TextField from '../fields/TextField';


interface Props {
  name: string,
  label: string,
  validate?: FieldValidator<string>,
}

function Text({ name, label, validate }: Props) {
  return (
    <div className="form-section-row">
      <label className="form-section-row-label-base">{label}</label>
      <TextField
        name={name}
        validate={validate}
      />
    </div>
  );
}

export default Text;
