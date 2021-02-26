import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';


export function Countdown() {
  const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown } = useContext(CountdownContext)

  const [minuteLeftRight, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeftRight, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={ styles.countdownContainer }>
        <div>
          <span>{ minuteLeftRight }</span>
          <span>{ minuteRight }</span>
        </div>
          <span>:</span>
        <div>
          <span>{ secondLeftRight }</span>
          <span>{ secondRight }</span>
        </div>
      </div>

      { hasFinished ? (
        <button 
          disabled
          className={ styles.countDownButton }
        > 
          Ciclo encerrado
        </button>
      ) : (
        <>
        { isActive ? (
          <button 
            type="button" 
            className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
            onClick={ resetCountdown }
          > 
            Abandonar ciclo
          </button>
        ) : (
          <button 
            type="button" 
            className={ styles.countDownButton }
            onClick={ startCountdown }
          > 
            Iniciar um ciclo
          </button>
        )}
        </>
      )}
    </div>
  );
}