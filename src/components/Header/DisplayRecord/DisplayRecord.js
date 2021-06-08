import { useSelector } from 'react-redux';
import { defineMessages, FormattedMessage } from 'react-intl';

import styles from './DisplayRecord.module.scss';

const messages = defineMessages({
    record: {
        id: 'header.record',
        defaultMessage: "Record"
    }
});

const DisplayRecord = () => {
    const record = useSelector(state => state.results.record);

    return (<div className={styles.container}>
                <span><FormattedMessage {...messages.record} /></span>
                <span>{record}</span>
            </div>);
};

export default DisplayRecord;