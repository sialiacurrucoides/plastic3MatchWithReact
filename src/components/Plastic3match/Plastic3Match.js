import React, {useState} from 'react';
import styles from './Plastic3Match.module.scss';
import Header from '../Header/Header';
import GameField from '../GameField/GameField';
import Controls from '../Controls/Controls';



const Plastic3Match = () => {
    const [soundAllowed, setSoundAllowed] = useState(true);

    const handleClick = () => {
        setSoundAllowed(prev => !prev);
    };

    return (
        <div className={styles.gameBoard}>
            <Header />
            <GameField soundAllowed={soundAllowed}/>
            <Controls handleSpeakerClick={handleClick} soundAllowed={soundAllowed}/>
        </div>
    );

};

export default Plastic3Match;