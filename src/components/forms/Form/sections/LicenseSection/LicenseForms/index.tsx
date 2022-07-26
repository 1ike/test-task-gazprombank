import React, { useContext, useEffect } from 'react';

import ButtonSecondary from '../../../../../uiKit/buttons/ButtonSecondary';
import plusIcon from '../../../../../../assets/images/plus.svg';
import styles from './LicenseForms.module.scss';
import { Licenses, LicensesContext } from '../contexts/Licenses';
import LicenseForm from '../LicenseForm';


interface Props {
  input: { onChange: (licenses: Licenses) => void }
}

function LicenseForms({ input: { onChange } }: Props) {
  const {
    licenses, formIds, addFormId, deleteFormId,
  } = useContext(LicensesContext);


  useEffect(() => onChange(licenses), [onChange, licenses]);

  return (
    <>
      {formIds.map((id) => (
        <LicenseForm initialValues={{ id }} key={id} onCancel={deleteFormId!} />
      ))}
      <ButtonSecondary
        onClick={addFormId!}
        buttonClassName={styles.addButton}
      >
        <img src={plusIcon} alt="" />
        Добавить ещё одну лицензию
      </ButtonSecondary>
    </>
  );
}

export default LicenseForms;
