import React,  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { defineMessages, FormattedMessage } from 'react-intl';

import styles from './DisplayScore.module.scss';
import { resultsActions, badgesActions, generalStateActions } from '../../../store/index';
import { techScoreGoals, canvasTypes } from '../../../constants/constants';

const messages = defineMessages({
    score: {
        id: 'header.score',
        defaultMessage: 'Score'
    }
});

const DisplayScore = () => {
    const score = useSelector(state => state.results.score);
    const record = useSelector(state => state.results.record);
    const level = useSelector(state => state.badges.level);
    const dispatch = useDispatch();


    useEffect(() => {
        if (score > record) dispatch(resultsActions.updateRecord(score));
        if (score >= techScoreGoals[level]) {
            dispatch(badgesActions.levelUp());
            dispatch(generalStateActions.updateCanvas(canvasTypes.selectTech));
            dispatch(generalStateActions.togglePause());
        };

    }, [score, dispatch, record, level])

    return (<div className={styles.container}>
                <span><FormattedMessage {...messages.score} /></span>
                <span>{score}</span>
            </div>);
};

export default DisplayScore;