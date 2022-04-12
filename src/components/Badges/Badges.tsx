import { default as bemCssModules } from 'bem-css-modules';
import { default as BadgesStyles } from './Badges.module.scss';

const style = bemCssModules(BadgesStyles);import React from 'react';


export type BadgetsProps = {
  title: string;
  variant?: boolean;
}

const Badges: React.FC<BadgetsProps> = ({ title, variant}) => {
  return (
    <div className={variant ? style('variant') : style()} >
      <h2>{title.toLowerCase()}</h2>
    </div>
  )
}

export default Badges;