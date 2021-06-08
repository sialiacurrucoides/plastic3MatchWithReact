import { useSelector, useDispatch } from 'react-redux';

import styles from './Controls.module.scss';
import {ReactComponent as SpeakerMuted} from '../../assets/icons/speaker_muted.svg';
import {ReactComponent as Speaker} from '../../assets/icons/speaker.svg';
import { languages } from '../../constants/constants';
import { generalStateActions } from '../../store/index';

const Controls = ({handleSpeakerClick, soundAllowed}) => {

    const currentLanguage = useSelector(state => state.general.language);
    const dispatch = useDispatch();

    const handleLangSelection = (event) => {
        dispatch(generalStateActions.changeLanguage(event.target.dataset.id));
    };

    return (
    <div className={styles.soundControl} onClick={handleSpeakerClick}>
        <div className={styles.langCodes}>{
            languages.map (lang => lang === currentLanguage ? 
                <strong 
                className={styles.langCode} 
                key={lang} 
                onClick={handleLangSelection} 
                data-id={lang}>
                    {lang.toUpperCase()}
                </strong> : 
                <span 
                className={styles.langCode} 
                key={lang} 
                onClick={handleLangSelection} 
                data-id={lang}>
                    {lang.toUpperCase()}
                </span>)}
        </div>
        <span className={styles.speakerIcon}>{soundAllowed ? <Speaker /> : <SpeakerMuted />}</span>
    </div>
    );
};

export default Controls;