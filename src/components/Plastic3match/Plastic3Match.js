import React, {useState} from 'react';
import styles from './Plastic3Match.module.scss';
import Header from '../Header/Header';
import GameField from '../GameField/GameField';
import {ReactComponent as SpeakerMuted} from '../../assets/icons/speaker_muted.svg';
import {ReactComponent as Speaker} from '../../assets/icons/speaker.svg';


const Plastic3Match = () => {
    const [soundAllowed, setSoundAllowed] = useState(true);

    const handleClick = () => {
        setSoundAllowed(prev => !prev);
    };

    return (
        <div className={styles.gameBoard}>
            <Header />
            <GameField soundAllowed={soundAllowed}/>
            <div className={styles.soundControl} onClick={handleClick}>
                <span className={styles.speakerIcon}>{soundAllowed ? <Speaker /> : <SpeakerMuted />}</span>
            </div>
        </div>
    );

};

export default Plastic3Match;