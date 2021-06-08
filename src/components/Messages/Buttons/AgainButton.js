import { defineMessages, FormattedMessage } from 'react-intl';

import styles from './AgainButton.module.scss';

const messages = defineMessages({
    again: {
        id: 'button.again',
        defaultMessage: 'Play again!'
    }
});

const AgainButton = ({onClick}) => {
    return (
        <div className={styles.againButton} onClick={onClick}>
            <FormattedMessage {...messages.again}/>
        </div>
    );
};

export default AgainButton;