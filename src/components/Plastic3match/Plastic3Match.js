import styles from './Plastic3Match.module.scss';
import Header from '../Header/Header';
import GameField from '../GameField/GameField';


const Plastic3Match = () => {

    return (
        <div className={styles.gameBoard}>
            <Header />
            <GameField />
        </div>
    );

};

export default Plastic3Match;