import styles from './AgainButton.module.scss';

const AgainButton = ({onClick}) => {
    return (
        <div className={styles.againButton} onClick={onClick}>
            Play again!
        </div>
    );
};

export default AgainButton;