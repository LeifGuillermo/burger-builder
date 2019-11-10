import React from 'react';
import classes from './Button.module.css';

const Button = props => {
  // props.btnType must be 'Danger' or 'Success'
  const buttonClass = [classes.Button, classes[props.btnType]].join(' ');
  return (
    <button className={buttonClass} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default Button;
