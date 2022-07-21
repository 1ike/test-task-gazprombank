import React, { useContext } from 'react';
import ButtonClear from '../../../../../uiKit/buttons/ButtonClear';

import Section from '../../Section';
import LicenseCard from '../LicenseCard';
import LicenseViewBlock from './LicenseViewBlock';
import styles from './Licenses.module.scss';
import { License, LicensesContext } from '../contexts/Licenses';
import editIcon from '../../../../../../assets/images/edit.svg';
import deleteIcon from '../../../../../../assets/images/delete.svg';


function Licenses() {
  const { licenses, deleteLicense } = useContext(LicensesContext);

  const onDelete = (license: License) => () => deleteLicense && deleteLicense(license);

  return (
    <>
      {licenses.map((license) => (
        <LicenseCard title={`Лицензия № ${license.number}`} key={license.id}>
          <Section>
            <LicenseViewBlock license={license} />
          </Section>
          <div className={styles.viewButtons}>
            <ButtonClear>
              <img src={editIcon} alt="" />
              Редактировать
            </ButtonClear>
            <ButtonClear onClick={onDelete(license)}>
              <img src={deleteIcon} alt="" />
              Удалить
            </ButtonClear>
          </div>
        </LicenseCard>
      ))}
    </>
  );
}

export default Licenses;
