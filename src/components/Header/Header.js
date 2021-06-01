import styles from './Header.module.scss';
import DisplayScore from './DisplayScore/DisplayScore';
import DisplayRecord from './DisplayRecord/DisplayRecord';
import Timer from './Timer/Timer';

const Header = () => {
    return (<div className={styles.header}>
                <Timer />
                <DisplayScore />
                <DisplayRecord />
            </div>);
};

export default Header;