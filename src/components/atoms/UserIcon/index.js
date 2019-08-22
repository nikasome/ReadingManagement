import React from 'react';
import styles from './styles.module.css';

const UserIcon = ({ children, className, ...props }) => (
  <img
    src={children}
    alt="UserIcon"
    className={[styles.UserIcon, className].join(' ')}
    {...props}
  />
);

export default UserIcon;
