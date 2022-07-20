import React from 'react';

import Section from './Section';
import CheckboxFieldsBlock from '../../fieldBlocks/CheckboxFieldsBlock';


const questionnaireSectionScopeName = 'questionnaire';
const questionnaireSectionData = [
  {
    name: `${questionnaireSectionScopeName}.website`,
    label: 'Предоставление услуг с использованием сайта в сети Интернет',
  },
  {
    name: `${questionnaireSectionScopeName}.pdl`,
    label: 'Статус публичного должностного лица (ПДЛ)',
  },
  {
    name: `${questionnaireSectionScopeName}.beneficiaries`,
    label: 'Наличие выгодоприобретателей',
  },
  {
    name: `${questionnaireSectionScopeName}.representatives`,
    label: 'Наличие представителей',
  },
  {
    name: `${questionnaireSectionScopeName}.beneficialOwner`,
    label: 'Наличие бенефициарного владельца',
  },
];

function QuestionnaireSection({ containerClassName }: { containerClassName?: string }) {
  return (
    <Section containerClassName={containerClassName}>
      <CheckboxFieldsBlock data={questionnaireSectionData} />
    </Section>
  );
}

export default QuestionnaireSection;
