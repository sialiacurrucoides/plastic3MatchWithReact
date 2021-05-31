import styles from './MessageCanvas.module.scss';

const MessageCanvas = ({children}) => {
    return (<div className={styles.canvas}>
                {children}
            </div>);
};

export default MessageCanvas;