import { useSelector, useDispatch } from 'react-redux';
import styles from './DisplayScore.module.scss';
import { resultsActions, badgesActions } from '../../../store/index';
import { techScoreGoals, badges } from '../../../constants/constants';

const DisplayScore = () => {
    const score = useSelector(state => state.results.score);
    const record = useSelector(state => state.results.record);
    const level = useSelector(state => state.badges.level);
    const dispatch = useDispatch();

    if (score > record) dispatch(resultsActions.updateRecord(score));
    if (score >= techScoreGoals[level]) {
        dispatch(badgesActions.levelUp());
        dispatch(badgesActions.addBadge(badges[level]));
    };

    return (<div className={styles.container}>
                <span>Score</span>
                <span>{score}</span>
            </div>);
};

export default DisplayScore;