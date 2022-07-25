import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
import { uniqueId } from 'lodash';

import ButtonSecondary from '../../../../../uiKit/buttons/ButtonSecondary';
import plusIcon from '../../../../../../assets/images/plus.svg';
import styles from './LicenseForms.module.scss';
import { LicenseID, Licenses, LicensesContext } from '../contexts/Licenses';
import LicenseForm from '../LicenseForm';


const generateId = () => uniqueId(); // must use uuid or nanoid for prod

interface Props {
  input: { onChange: (licenses: Licenses) => void }
}

function LicenseForms({ input: { onChange } }: Props) {
  const { licenses } = useContext(LicensesContext);

  const hasLicenses = licenses.length > 0;

  const [formIds, setformIds] = useState(hasLicenses ? [] : [generateId()]);

  const addForm = () => setformIds([...formIds, generateId()]);

  const deleteForm = useCallback((id: LicenseID) => {
    if (formIds.length > 1 || hasLicenses) {
      setformIds(formIds.filter((formId) => formId !== id));
    }
  }, [setformIds, hasLicenses, formIds]);

  useEffect(() => onChange(licenses), [onChange, licenses]);

  return (
    <>
      {formIds.map((id) => (
        <LicenseForm initialValues={{ id }} key={id} onCancel={deleteForm} />
      ))}
      <ButtonSecondary
        onClick={addForm}
        buttonClassName={styles.addButton}
      >
        <img src={plusIcon} alt="" />
        Добавить ещё одну лицензию
      </ButtonSecondary>
    </>
  );
}

export default LicenseForms;
