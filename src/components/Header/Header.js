import styles from './Header.module.scss';
import DisplayScore from './DisplayScore/DisplayScore';
import DisplayRecord from './DisplayRecord/DisplayRecord';
import Timer from './Timer/Timer';
import Goal from './Goal/Goal';
import Badges from './Badges/Badges';

const Header = () => {
    return (<div className={styles.header}>
                <Timer />
                <DisplayScore />
                <Goal />
                <Badges />
                <DisplayRecord />
            </div>);
};

export default Header;