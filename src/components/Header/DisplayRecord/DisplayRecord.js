import { useSelector } from 'react-redux';
import styles from './DisplayRecord.module.scss';


const DisplayRecord = () => {
    const record = useSelector(state => state.results.record);

    return (<div className={styles.container}>
                <span>Record</span>
                <span>{record}</span>
            </div>);
};

export default DisplayRecord;