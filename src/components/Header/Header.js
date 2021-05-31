import styles from './Header.module.scss';
import DisplayScore from './DisplayScore/DisplayScore';
import DisplayRecord from './DisplayRecord/DisplayRecord';

const Header = () => {
    return (<div className={styles.header}>
                <DisplayScore />
                <DisplayRecord />
            </div>);
};

export default Header;