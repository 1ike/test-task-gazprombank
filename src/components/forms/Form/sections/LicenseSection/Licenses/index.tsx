import React, { useContext } from 'react';
import ButtonClear from '../../../../../uiKit/buttons/ButtonClear';

import Section from '../../Section';
import LicenseCard from '../LicenseCard';
import LicenseViewBlock from './LicenseViewBlock';
import styles from './Licenses.module.scss';
import { LicensesContext } from '../contexts/Licenses';
import editIcon from '../../../../../../assets/images/edit.svg';
import deleteIcon from '../../../../../../assets/images/delete.svg';


function Licenses() {
  const { licenses } = useContext(LicensesContext);

  return (
    <>
      {licenses.map((license) => (
        <LicenseCard title={`Лицензия № ${license.number}`}>
          <Section>
            <LicenseViewBlock license={license} />
          </Section>
          <div className={styles.viewButtons}>
            <ButtonClear>
              <img src={editIcon} alt="" />
              Редактировать
            </ButtonClear>
            <ButtonClear>
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
