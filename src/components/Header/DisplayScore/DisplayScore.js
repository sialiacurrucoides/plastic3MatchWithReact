import { useSelector, useDispatch } from 'react-redux';
import styles from './DisplayScore.module.scss';
import { resultsActions } from '../../../store/index';

const DisplayScore = () => {
    const score = useSelector(state => state.results.score);
    const record = useSelector(state => state.results.record);
    const dispatch = useDispatch();

    if (score > record) dispatch(resultsActions.updateRecord(score));

    return (<div className={styles.container}>
                <span>Score</span>
                <span>{score}</span>
            </div>);
};

export default DisplayScore;