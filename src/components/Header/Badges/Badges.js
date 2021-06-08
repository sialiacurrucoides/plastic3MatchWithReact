import { useSelector } from 'react-redux';
import { defineMessages, FormattedMessage } from 'react-intl';

import styles from './Badges.module.scss';
import { badges } from '../../../constants/constants';

const messages = defineMessages({
    badges: {
        id: 'header.badges',
        defaultMessage: 'Badges'
    }
});

const Badges = () => {
    const achievedBadges = useSelector(state => state.badges.badges)

    return (
        <div className={styles.container}>
            <span><FormattedMessage {...messages.badges} /></span>
            <span className={styles.badgeSeries}>
                {badges.map(badge => {
                return (
                <span key={`badge${badge}`} className={achievedBadges.includes(badge) ? styles.highlighted : ''}>
                    {badge}
                    </span>);
            })}</span>
        </div>
    );
};

export default Badges;