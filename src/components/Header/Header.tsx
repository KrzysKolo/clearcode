import React from 'react';
import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderStyles } from './Header.module.scss';

const style = bemCssModules(HeaderStyles);

const Header = () => {
  return (
    <section className={style()}>
      <div className={style('box')}>
        <div className={style('logo')}>Rootsly</div>
        <div className={style('text')}>Explore your relationships</div>
      </div>
      <div className={style('box')}>
        <div className={style('image')}/>
        <div className={style('user')}>John Done</div>
      </div>
    </section>
  )
}

export default Header;