import { useSelector } from 'react-redux';
import styles from './Badges.module.scss';
import { badges } from '../../../constants/constants';

const Badges = () => {
    const achievedBadges = useSelector(state => state.badges.badges)

    return (
        <div className={styles.container}>
            <span>Badges</span>
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