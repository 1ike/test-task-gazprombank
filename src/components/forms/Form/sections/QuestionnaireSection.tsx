import React from 'react';

import Section from './Section';
import CheckboxFieldsBlock from '../../fieldBlocks/CheckboxFieldsBlock';
import { makeFieldPathGetter } from './lib';


export const questionnaireSectionScopeName = 'questionnaire';
export enum QuestionnaireSectionFieldName {
  website = 'website',
  pdl = 'pdl',
  beneficiaries = 'beneficiaries',
  representatives = 'representatives',
  beneficialOwner = 'beneficialOwner',
}

const getPath = makeFieldPathGetter<
  typeof questionnaireSectionScopeName, QuestionnaireSectionFieldName
>(questionnaireSectionScopeName);

export const questionnaireSectionPaths = {
  [QuestionnaireSectionFieldName.website]: getPath(QuestionnaireSectionFieldName.website),
  [QuestionnaireSectionFieldName.pdl]: getPath(QuestionnaireSectionFieldName.pdl),
  [QuestionnaireSectionFieldName.beneficiaries]: getPath(
    QuestionnaireSectionFieldName.beneficiaries,
  ),
  [QuestionnaireSectionFieldName.representatives]: getPath(
    QuestionnaireSectionFieldName.representatives,
  ),
  [QuestionnaireSectionFieldName.beneficialOwner]: getPath(
    QuestionnaireSectionFieldName.beneficialOwner,
  ),
};

const questionnaireSectionData = [
  {
    name: questionnaireSectionPaths.website,
    label: 'Предоставление услуг с использованием сайта в сети Интернет',
  },
  {
    name: questionnaireSectionPaths.pdl,
    label: 'Статус публичного должностного лица (ПДЛ)',
  },
  {
    name: questionnaireSectionPaths.beneficiaries,
    label: 'Наличие выгодоприобретателей',
  },
  {
    name: questionnaireSectionPaths.representatives,
    label: 'Наличие представителей',
  },
  {
    name: questionnaireSectionPaths.beneficialOwner,
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
