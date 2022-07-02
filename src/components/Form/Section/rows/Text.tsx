import React from 'react';
import { Field } from 'react-final-form';


interface Props {
  name: string,
  label: string,
}

function Text({ name, label }: Props) {
  return (
    <div className="form-section-row">
      <label className="form-section-row-label-base">{label}</label>
      <Field
        name={name}
        component="input"
        type="text"
        className="form-section-row-field-base"
      />
    </div>
  );
}

export default Text;
