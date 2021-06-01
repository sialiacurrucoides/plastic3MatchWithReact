import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Timer.module.scss';
import { timeLimit } from '../../../constants/constants';
import { generalStateActions } from '../../../store/index';

const defaultDisplay = '- : --';
const step = 1000; // ms
const displayTime = (prevTime) => {
    const minutes = Math.floor(prevTime / (1000*60));
    const seconds = minutes > 0 ? (prevTime/1000) % (minutes*60): prevTime/1000;
    return `${minutes}:${seconds}`;
}

const Timer = () => {
    const [remainingTime, setRemainingTime] = useState(defaultDisplay);
    const isGameOn = useSelector(state => state.general.isOn);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isGameOn) {
            let prevTime = timeLimit*60*1000;
            const timer = setInterval(() => {
                if (prevTime === 0) {
                    dispatch(generalStateActions.endGame());
                    dispatch(generalStateActions.updateCanvas('gameOver'));
                    clearInterval(timer);
                };
                setRemainingTime(displayTime(prevTime));
                prevTime -= step;
            },step);
        }
        else setRemainingTime(defaultDisplay);
    }, [isGameOn, dispatch]);

    return (
        <div className={styles.container}>
            <span>Time</span>
            <span>{remainingTime}</span>
        </div>
    );
};

export default Timer;