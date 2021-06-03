import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Timer.module.scss';
import { timeLimit } from '../../../constants/constants';
import { generalStateActions } from '../../../store/index';
import { nonrecyclablePlasticInx } from '../../../constants/constants';

const defaultDisplay = '- : --';
const step = 1000; // ms
const displayTime = (prevTime) => {
    const minutes = Math.floor(prevTime / (1000*60));
    const seconds = minutes > 0 ? (prevTime/1000) % (minutes*60): prevTime/1000;
    return `${minutes}:${seconds}`;
}

const Timer = () => {
    const [remainingTime, setRemainingTime] = useState(defaultDisplay);
    const [isOver, setIsOver] = useState(false);

    const isGameOn = useSelector(state => state.general.isOn);
    const badges = useSelector(state => state.badges.badges);
    const isPaused = useSelector(state => state.general.isPaused);
    const dispatch = useDispatch();
    const interValID = useRef(0);
    const displayedTime = useRef(timeLimit*60*1000);

    useEffect(() => {
        if (isOver){
            if (badges.length === nonrecyclablePlasticInx.length){
                dispatch(generalStateActions.updateCanvas('congrat'));
            } else {
                dispatch(generalStateActions.updateCanvas('gameOver'));
            }
        }
    }, [isOver, badges, dispatch]);

    const updateTimer = useCallback(() => {
        
        interValID.current = setInterval(() => {
            
            if (displayedTime.current === 0) {
                clearInterval(interValID.current);
                displayedTime.current = null;
                dispatch(generalStateActions.stopGame());
                setIsOver(true);              
            } else {
                setRemainingTime(displayTime(displayedTime.current));
                displayedTime.current -= step;
            }
            
        },step);
        
    }, [dispatch]); 


    useEffect(() => {
            if (isPaused && isGameOn) clearInterval(interValID.current);
            else if (isGameOn && !isPaused) updateTimer();
            else {
                setRemainingTime(defaultDisplay);
                displayedTime.current = timeLimit*60*1000;
            };
        },[isPaused, isGameOn, updateTimer]);

    return (
        <div className={styles.container}>
            <span>Time</span>
            <span>{remainingTime}</span>
        </div>
    );
};

export default Timer;