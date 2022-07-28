import React from 'react';
import { useFormState } from 'react-final-form';


import Progress, { ProgressStatus } from '../../Progress';
import { infoSectionPaths, infoSectionScopeName } from './sections/InfoSection';
import { licensesSwitchName } from './sections/LicenseSection';
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
| typeof licensesSwitchName | typeof questionnaireSectionScopeName;

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
    paths: {
      [licensesSwitchName]: licensesSwitchName,
    },
    sectionScopeName: licensesSwitchName,
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
) => Object.keys(propState).some(
  (key) => propState[key] && Object.values(sectionPaths).includes(key),
);


function FormProgress() {
  const {
    touched, dirtyFields, errors, submitFailed,
  } = useFormState();

  const sectionsState = sections.map((section) => {
    const isTouched = calculateSectionProp(touched || {}, section.paths);
    const isDirty = calculateSectionProp(dirtyFields, section.paths);

    const hasError = errors ? Object.keys(errors).some(
      (key) => section.sectionScopeName === (key as SectionScopeName),
    ) : false;

    return ({
      ...section, isTouched, isDirty, hasError,
    });
  });

  const sectionProgressStatuses = sectionsState.reduce(
    (acc, { name, hasError }, index, arr) => {
      let status = ProgressStatus.InProgress;

      const isLast = arr.length === index + 1;
      const isLeftedBehind = isLast
        ? false
        : sectionsState.slice(index + 1).some((section) => section.isTouched || section.isDirty);

      if (isLeftedBehind || submitFailed) {
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
