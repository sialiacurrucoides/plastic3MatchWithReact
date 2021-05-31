import { useSelector } from 'react-redux';
import styles from './DisplayScore.module.scss';

const DisplayScore = () => {
    const score = useSelector(state => state.results.score)

    return (<div className={styles.container}>
                <span>Score</span>
                <span>{score}</span>
            </div>);
};

export default DisplayScore;