import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ButtonStyles } from './Button.module.scss';

const style = bemCssModules(ButtonStyles);

export type ButtonProps = {
  title: string;
  variant?: boolean;
}

const Button: React.FC<ButtonProps> = ({title, variant}) => {
  return (
    <div className={variant ? style('variant') : style() }> {title}</div>
  )
}

export default Button;