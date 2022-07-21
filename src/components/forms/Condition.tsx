import React, { PropsWithChildren } from 'react';
import { Field } from 'react-final-form';


interface Props<T> {
  when: string,
  is: T,
}

function Condition<T>({ when, is, children }: PropsWithChildren<Props<T>>) {
  return (
    <Field name={when} subscription={{ value: true }}>
      {({ input: { value } }) => (value === is ? children : null)}
    </Field>
  );
}

export default Condition;
