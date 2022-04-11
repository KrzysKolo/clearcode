import { default as bemCssModules } from 'bem-css-modules';
import { default as BadgesStyles } from './Badges.module.scss';

const style = bemCssModules(BadgesStyles);import React from 'react';


export type BadgetsProps = {
  title: string;
  variant?: boolean;
  onClick?: () => void;
}
const Badges: React.FC<BadgetsProps> = ({ title, variant, onClick}) => {
  return (
    <div className={variant ? style('variant') : style()} onClick={onClick}>
      <h2>{title.toLowerCase()}</h2>
    </div>
  )
}

export default Badges;