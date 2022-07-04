import React from 'react';
import { Field } from 'react-final-form';
import { FieldValidator } from 'final-form';


interface Props {
  name: string,
  label: string,
  validate?: FieldValidator<string>,
}

function Text({ name, label, validate }: Props) {
  return (
    <div className="form-section-row">
      <label className="form-section-row-label-base">{label}</label>
      <Field
        name={name}
        component="input"
        type="text"
        className="form-section-row-field-base"
        validate={validate}
      />
    </div>
  );
}

export default Text;
