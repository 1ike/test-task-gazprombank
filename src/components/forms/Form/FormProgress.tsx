import React from 'react';
import { useFormState } from 'react-final-form';


import Progress, { ProgressStatus } from '../../Progress';
import { infoSectionPaths, infoSectionScopeName } from './sections/InfoSection';
import { licensesSectionScopeName } from './sections/LicenseSection';
import { questionnaireSectionPaths, questionnaireSectionScopeName } from './sections/QuestionnaireSection';
import { registrationSectionPaths, registrationSectionScopeName } from './sections/RegistrationSection';


export enum SectionName {
  Info = 'Информация',
  Registration = 'Сведения',
  Licenses = 'Лицензии',
  Questionnaire = 'Опросник',
}

export type Paths = Record<string, string>;
export type SectionScopeName = typeof infoSectionScopeName | typeof registrationSectionScopeName
| typeof licensesSectionScopeName | typeof questionnaireSectionScopeName;

interface Section {
  name: SectionName,
  paths: Paths,
  sectionScopeName: SectionScopeName,
}

const sections: Section[] = [
  { name: SectionName.Info, paths: infoSectionPaths, sectionScopeName: infoSectionScopeName },
  {
    name: SectionName.Registration,
    paths: registrationSectionPaths,
    sectionScopeName: registrationSectionScopeName,
  },
  {
    name: SectionName.Licenses,
    paths: { licensesSectionScopeName },
    sectionScopeName: licensesSectionScopeName,
  },
  {
    name: SectionName.Questionnaire,
    paths: questionnaireSectionPaths,
    sectionScopeName: questionnaireSectionScopeName,
  },
];


const calculateSectionProp = (
  propState: { [key: string]: boolean },
  sectionPaths: Paths,
) => Object.keys(propState).some((key) => Object.values(sectionPaths).includes(key));


function FormProgress() {
  const { dirtyFields, errors } = useFormState();

  const sectionsState = sections.map((section) => {
    const isDirty = calculateSectionProp(dirtyFields, section.paths);

    const hasError = errors ? Object.keys(errors).some(
      (key) => section.sectionScopeName === (key as SectionScopeName),
    ) : false;

    return ({ ...section, isDirty, hasError });
  });

  const sectionProgressStatuses = sectionsState.reduce(
    (acc, { name, isDirty, hasError }, index, arr) => {
      let status = ProgressStatus.InProgress;

      const isLast = arr.length === index + 1;
      const isLeftedBehind = isLast
        ? false : sectionsState.slice(index + 1).some((section) => section.isDirty);

      if (isDirty && isLeftedBehind) {
        status = hasError ? ProgressStatus.Error : ProgressStatus.Success;
      }

      acc.set(name, status);
      return acc;
    },
    new Map(),
  );

  return <Progress<SectionName> headerText="Заполнение анкеты" statuses={sectionProgressStatuses} />;
}

export default FormProgress;
