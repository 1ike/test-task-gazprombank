import React from 'react';
import cn from 'classnames';

import styles from './Card.module.scss';


interface Props {
  children: React.ReactNode,
  className?: string,
}

function Card({ children, className }: Props) {
  return (
    <div
      className={cn(styles.card, className)}
    >
      {children}
    </div>
  );
}

export default Card;
