import React, { useContext, useState } from 'react';
import ButtonClear from '../../../../../uiKit/buttons/ButtonClear';

import Section from '../../Section';
import LicenseCard from '../LicenseCard';
import LicenseViewBlock from './LicenseViewBlock';
import styles from './Licenses.module.scss';
import { License as LicenseType, LicensesContext } from '../contexts/Licenses';
import editIcon from '../../../../../../assets/images/edit.svg';
import deleteIcon from '../../../../../../assets/images/delete.svg';
import LicenseForm from '../LicenseForm/index';


function License({ license }: { license: LicenseType }) {
  const [edit, setEdit] = useState(false);
  const makeEditable = () => setEdit(true);
  const makeReadonly = () => setEdit(false);

  const { deleteLicense } = useContext(LicensesContext);
  const onDelete = (licenseToBeDeleted: LicenseType) => () => deleteLicense!(licenseToBeDeleted);

  return edit
    ? <LicenseForm initialValues={license} onCancel={makeReadonly} edit />
    : (
      <LicenseCard title={`Лицензия № ${license.number}`} key={license.id}>
        <Section>
          <LicenseViewBlock license={license} />
        </Section>
        <div className={styles.viewButtons}>
          <ButtonClear onClick={makeEditable}>
            <img src={editIcon} alt="" />
            Редактировать
          </ButtonClear>
          <ButtonClear onClick={onDelete(license)}>
            <img src={deleteIcon} alt="" />
            Удалить
          </ButtonClear>
        </div>
      </LicenseCard>
    );
}

function Licenses() {
  const { licenses } = useContext(LicensesContext);

  return <>{licenses.map((license) => <License license={license} key={license.id} />)}</>;
}

export default Licenses;
