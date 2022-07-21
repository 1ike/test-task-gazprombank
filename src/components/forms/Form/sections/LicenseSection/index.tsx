import React from 'react';
import { Field } from 'react-final-form';

import styles from './LicenseSection.module.scss';
import Checkbox from '../../../rows/Checkbox';
import Licenses from './Licenses';
import Condition from '../../../Condition';
import LicenseForms from './LicenseForms';


export const licensesSwitchName = 'licensesSwitch';


interface Props {
  containerClassName?: string,
}

function LicenseSection({ containerClassName }: Props) {
  return (
    <div className={containerClassName}>
      <Checkbox
        label="Моя компания осуществляет деятельность, подлежащую лицензированию в соответствии с законодательством РФ"
        name={licensesSwitchName}
      />
      <Condition<boolean> when={licensesSwitchName} is>
        <div className={styles.cards}>
          <h3 className={styles.cardsHeader}>Ваши лицензии:</h3>
          <Licenses />
          <Field
            name="licenses"
            component={LicenseForms}
          />
        </div>
      </Condition>
    </div>
  );
}

export default LicenseSection;
