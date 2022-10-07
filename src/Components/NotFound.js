import React from "react";
import { ReactComponent as Error404 } from '../Assets/error-404.svg'
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={`container mainContainer ${styles.wrapper}`}>
      <Error404/>
      <p className="title">Página não encontrada.</p>
    </div>
  );
};

export default NotFound;
