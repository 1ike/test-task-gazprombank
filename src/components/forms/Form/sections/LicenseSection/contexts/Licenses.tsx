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
}

export const LicensesContext = React.createContext<ILicensesContext>({ licenses: [] });


interface Props {
  children: React.ReactNode,
}

export function LicensesProvider({ children }: Props) {
  const [licenses, setLicensesState] = useState<Licenses>([{
    id: 'ЛО-40-01-001077',
    type: 'Свидетельство СРО',
    number: 'ЛО-40-01-001077',
    kindOfActivity: 'Деятельности по монтажу, техническому обслуживанию и ремонту средств обеспечения пожарной безопасности зданий и сооружений.',
    issuer: 'Комиссией по выдаче лицензий',
    dateOfIssue: '2006-04-20',
    validityPeriod: '2026-04-19',
    unlimited: false,
  }]);

  const setLicenses = useCallback(
    (newLicenses: Licenses) => setLicensesState(newLicenses),
    [setLicensesState],
  );

  const value = useMemo(() => ({ licenses, setLicenses }), [licenses, setLicenses]);

  return (
    <LicensesContext.Provider value={value}>
      {children}
    </LicensesContext.Provider>
  );
}
