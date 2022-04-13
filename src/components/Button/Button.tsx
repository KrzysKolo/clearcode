import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ButtonStyles } from './Button.module.scss';
import { ButtonProps } from '../../models/Friend';

const style = bemCssModules(ButtonStyles);

const Button: React.FC<ButtonProps> = ({title, variant, onClick}) => {
  return (
    <div className={variant ? style('variant') : style()} onClick={onClick}> {title}</div>
  )
}

export default Button;