import React from 'react';

import styles from './Form.module.scss';
import Progress, { ProgressStatus } from './Progress';
// import avatar from '../../../assets/images/avatar.svg';


// interface ButtonProps {
//   children: React.ReactNode,
// }

enum Section {
  Info = 'Информация',
  Registration = 'Сведения',
  Licenses = 'Лицензии',
  Questionnaire = 'Опросник',
}


const data = [
  {
    name: Section.Info,
    status: ProgressStatus.InProgress,
  },
  {
    name: Section.Registration,
    status: ProgressStatus.InProgress,
  },
  {
    name: Section.Licenses,
    status: ProgressStatus.Success,
  },
  {
    name: Section.Questionnaire,
    status: ProgressStatus.Error,
  },
];

function Form() {
  return (
    <div className={styles.content}>
      <form action="" className={styles.form}>
        <button type="button">111</button>
      </form>
      <Progress headerText="Заполнение анкеты" data={data} />
    </div>
  );
}

export default Form;
