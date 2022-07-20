import React from 'react';

import styles from './QuestionnaireSection.module.scss';
import Section from '../Section';
import CheckboxFieldsBlock from '../../../fieldBlocks/CheckboxFieldsBlock';


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

function QuestionnaireSection() {
  return (
    <Section containerClassName={styles.sectionMargin}>
      <CheckboxFieldsBlock data={questionnaireSectionData} />
    </Section>
  );
}

export default QuestionnaireSection;
