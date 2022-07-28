import React, {
  useCallback, useLayoutEffect, useMemo, useState,
} from 'react';
import { uniqueId } from 'lodash';


export type LicenseID = string;
export interface License {
  id: LicenseID,
  type: string,
  number: string,
  kindOfActivity: string,
  issuer: string,
  dateOfIssue: string,
  validityPeriod: string,
  unlimited: boolean,
}

export type Licenses = License[];

interface ILicensesContext {
  licenses: Licenses;
  setLicenses?: (licenses: Licenses) => void;
  addOrUpdateLicense?: (license: License) => void;
  deleteLicense?: (license: License) => void;
  formIds: LicenseID[];
  addFormId?: () => void;
  deleteFormId?: (id: LicenseID) => void;
}

export const LicensesContext = React.createContext<ILicensesContext>({
  licenses: [],
  formIds: [],
});

const generateId = () => uniqueId(); // must use uuid or nanoid for prod

interface Props {
  children: React.ReactNode,
}

export function LicensesProvider({ children }: Props) {
  const [licenses, setLicensesState] = useState<Licenses>([

  ]);

  const setLicenses = useCallback(
    (newLicenses: Licenses) => setLicensesState(newLicenses),
    [setLicensesState],
  );

  const deleteLicense = useCallback(
    (deletingLicense: License) => {
      setLicensesState(licenses.filter((license) => deletingLicense.id !== license.id));
    },
    [setLicensesState, licenses],
  );


  const hasLicenses = licenses.length > 0;

  const [formIds, setFormIds] = useState<LicenseID[]>(hasLicenses ? [] : [generateId()]);

  const addFormId = useCallback(
    () => setFormIds([...formIds, generateId()]),
    [setFormIds, formIds],
  );

  const deleteFormId = useCallback((id: LicenseID) => {
    setFormIds(formIds.filter((formId) => formId !== id));
  }, [setFormIds, formIds]);


  const addOrUpdateLicense = useCallback(
    (newLicense: License) => {
      const indexOfExistingLicense = licenses.findIndex((license) => newLicense.id === license.id);

      if (indexOfExistingLicense >= 0) {
        licenses[indexOfExistingLicense] = newLicense;
        setLicensesState([...licenses]);
      } else {
        setLicensesState([...licenses, newLicense]);
      }
    },
    [setLicensesState, licenses],
  );


  useLayoutEffect(() => {
    if (formIds.length === 0 && licenses.length === 0) addFormId();
  });

  const value = useMemo(
    () => ({
      licenses,
      setLicenses,
      addOrUpdateLicense,
      deleteLicense,
      formIds,
      addFormId,
      deleteFormId,
    }),
    [
      licenses,
      setLicenses,
      addOrUpdateLicense,
      deleteLicense,
      formIds,
      addFormId,
      deleteFormId,
    ],
  );

  return (
    <LicensesContext.Provider value={value}>
      {children}
    </LicensesContext.Provider>
  );
}
