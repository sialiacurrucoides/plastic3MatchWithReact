import styles from './GoButton.module.scss';

const GoButton = ({onClick}) => {
    return (
        <div className={styles.goButton} onClick={onClick}>GO</div>
    );
};

export default GoButton;