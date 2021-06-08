import { useSelector } from 'react-redux';
import { defineMessages, FormattedMessage } from 'react-intl';

import styles from './Goal.module.scss';
import { techScoreGoals } from '../../../constants/constants';

const messages = defineMessages({
    goal: {
        id: 'header.goal',
        defaultMessage: 'Goal'
    }
});

const Goal = () => {
    const level = useSelector(state => state.badges.level);

    return (
        <div className={styles.container}>
            <span><FormattedMessage {...messages.goal} /></span>
            <span>{techScoreGoals[level]}</span>
        </div>
    );
};

export default Goal;