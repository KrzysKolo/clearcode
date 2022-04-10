import React from 'react'
import Loader from 'react-ts-loaders/dist';
import { default as bemCssModules } from 'bem-css-modules';
import { default as LoadingStyles } from './Loading.module.scss';

const style = bemCssModules(LoadingStyles);

const Loading: React.FC = () => {
  return (
    <div className={style()}>
      <Loader
        type="ellipsis"
        color="#f67a90"
        size={150}
      />

    </div>
  )
}

export default Loading