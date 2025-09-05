import React from 'react';
import styles from './customRegionBar.module.scss';

export function CustomRegionBar({ children }) {
  return (
    <div className={styles.customRegionBar}>
      <div className={styles.container}>
        <div className={styles.regionText}>
          as melhores ofertas e condições de frete para a sua região :)
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputLabel}>Digite um CEP</div>
          <div className={styles.inputWrapper}>
            <input 
              type="text" 
              placeholder="Digite o seu CEP" 
              className={styles.cepInput} 
            />
            <button className={styles.okButton}>OK</button>
          </div>
          <a href="#" className={styles.notMyCep}>não sei meu cep</a>
        </div>
      </div>
    </div>
  );
}
