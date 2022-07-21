import React, {
  useCallback, useMemo, useState,
} from 'react';

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
}

export const LicensesContext = React.createContext<ILicensesContext>({ licenses: [] });


interface Props {
  children: React.ReactNode,
}

export function LicensesProvider({ children }: Props) {
  const [licenses, setLicensesState] = useState<Licenses>([]);

  const setLicenses = useCallback(
    (newLicenses: Licenses) => setLicensesState(newLicenses),
    [setLicensesState],
  );

  const addOrUpdateLicense = useCallback(
    (newLicense: License) => {
      const indexOfExistingLicense = licenses.findIndex((license) => newLicense.id === license.id);

      if (indexOfExistingLicense >= 0) {
        licenses[indexOfExistingLicense] = newLicense;
        setLicensesState(licenses);
      } else {
        setLicensesState([...licenses, newLicense]);
      }
    },
    [setLicensesState, licenses],
  );

  const deleteLicense = useCallback(
    (deletingLicense: License) => {
      setLicensesState(licenses.filter((license) => deletingLicense.id !== license.id));
    },
    [setLicensesState, licenses],
  );

  const value = useMemo(
    () => ({
      licenses, setLicenses, addOrUpdateLicense, deleteLicense,
    }),
    [licenses, setLicenses, addOrUpdateLicense, deleteLicense],
  );

  return (
    <LicensesContext.Provider value={value}>
      {children}
    </LicensesContext.Provider>
  );
}
