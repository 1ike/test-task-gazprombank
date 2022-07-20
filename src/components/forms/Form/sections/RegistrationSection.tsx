import React from 'react';

import Section from './Section';
import TextFieldsBlock from '../../fieldBlocks/TextFieldsBlock';
import DateAndText from '../../rows/DateAndText';
import required from '../../validation/required';


const registrationSectionScopeName = 'registration';
const registrationSectionData = [
  {
    name: `${registrationSectionScopeName}.place`,
    label: 'Место регистрации',
    validate: required,
  },
];


function RegistrationSection({ containerClassName }: { containerClassName?: string }) {
  return (
    <Section
      headerText="Сведения о регистрации в качестве индивидуального предпринимателя"
      containerClassName={containerClassName}
    >
      <DateAndText
        label="Дата и номер"
        nameDate={`${registrationSectionScopeName}.date`}
        nameText={`${registrationSectionScopeName}.number`}
        validateDate={required}
        validateText={required}
      />
      <TextFieldsBlock data={registrationSectionData} />
    </Section>
  );
}

export default RegistrationSection;
