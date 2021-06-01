import { useSelector } from 'react-redux';
import styles from './Goal.module.scss';
import { techScoreGoals } from '../../../constants/constants';

const Goal = () => {
    const level = useSelector(state => state.badges.level);

    return (
        <div className={styles.container}>
            <span>Goal</span>
            <span>{techScoreGoals[level]}</span>
        </div>
    );
};

export default Goal;