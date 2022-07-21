import React from 'react';
import cn from 'classnames';

import { ButtonProps } from '../types';
import styles from './ButtonSecondary.module.scss';


function ButtonSecondary({ children, buttonClassName, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      {...rest}
      className={cn(styles.button, buttonClassName)}
    >
      {children}
    </button>
  );
}

export default ButtonSecondary;
