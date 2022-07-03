import React from 'react';

import { ButtonProps } from '../types';
import styles from './ButtonPrimary.module.scss';


function ButtonPrimary({ children, buttonClassName, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      {...rest}
      className={`${styles.button}${buttonClassName ? ` ${buttonClassName}` : ''}`}
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
