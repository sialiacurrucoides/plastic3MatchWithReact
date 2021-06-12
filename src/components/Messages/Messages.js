import { defineMessages, FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Messages.module.scss';
import AgainButton from './Buttons/AgainButton';
import GoButton from './Buttons/GoButton';
import MessageCanvas from './MessageCanvas/MessageCanvas';
import { generalStateActions, resultsActions, badgesActions } from '../../store/index';
import { canvasTypes, timeLimit, nonrecyclablePlasticInx, techScoreGoals } from '../../constants/constants';
import {ReactComponent as Hourglass} from '../../assets/icons/hourglass.svg';
import playMatchSound from '../GameField/SoundEffect/playMatchSound';

const messages = defineMessages({
    intro1title: {
        id: 'intro1.title',
        defaultMessage: 'Welcome to Plastic3match!'
    },
    intro1paras1: {
        id: 'intro1.paragraph1',
        defaultMessage: 'A three-match game where you can only make the recyclable plastics disappear.'
    },
    intro1paras2: {
        id: 'intro1.paragraph2',
        defaultMessage: 'Unless you develop a new tech.'
    },
    intro2paras1: {
        id: 'intro2.paragraph1',
        defaultMessage: 'Switch ANY adjacent pieces!'
    },
    intro2paras2: {
        id: 'intro2.paragraph2',
        defaultMessage: '...by clicking on each or by dragging one.'
    },
    intro3paras1: {
        id: 'intro3.paragraph1',
        defaultMessage: 'If you reach the next goal (score {goal}), you can eliminate one of the non-recyclable plastic types.'
    },
    intro3paras2: {
        id: 'intro3.paragraph2',
        defaultMessage: 'by developing a new technology!'
    },
    intro3or: {
        id: 'intro3.or',
        defaultMessage: 'or'
    },
    startParas1: {
        id: 'start.paragraph1',
        defaultMessage: 'You WIN if you got all the badges: 3/6/7!'
    },
    startParas2: {
        id: 'start.paragraph2',
        defaultMessage: 'Time is the essence...'
    },
    startParas3: {
        id: 'start.paragraph3',
        defaultMessage: 'You\'ve got {time} minute to develop a new tech!'
    },
    gameOver: {
        id: 'gameOver.over',
        defaultMessage: 'GAME OVER'
    },
    gameOverScore: {
        id: 'gameOver.score',
        defaultMessage: 'Your score'
    },
    congratParas1: {
        id: 'congrat.paragraph1',
        defaultMessage: 'Amazing! You won. Keep this enthusiasm!'
    },
    congratScore: {
        id: 'congrat.score',
        defaultMessage: 'Your score'
    },
    techSelection: {
        id: 'techSelection.text',
        defaultMessage: 'Great work! Choose one type that you can handle from now on.'
    },
    techSelectionCreate: {
        id: 'techSelection.create',
        defaultMessage: 'Create Tech'
    }
});

export const Introduction1 = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(generalStateActions.updateCanvas(canvasTypes.intro2));
    };

    return (
        <MessageCanvas>
            <div className={styles.intro1}>
                <h3><FormattedMessage {...messages.intro1title}/></h3>
                <p><FormattedMessage {...messages.intro1paras1}/></p>
                <p><FormattedMessage {...messages.intro1paras2}/></p>
               <GoButton onClick={handleClick}/>
            </div>
        </MessageCanvas>
    );
};
export const Introduction2 = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(generalStateActions.updateCanvas(canvasTypes.intro3));
    };
    return (
        <MessageCanvas>
            <div className={styles.intro2}>
                <p className="text-center intro p-3"><FormattedMessage {...messages.intro2paras1}/></p>
                <div className={styles.stepsAnimation}>
                    <div className={styles.tile}>
                        <img src="imgs/icon_1.png" alt="plastic-1" /><i className='fas fa-arrows-alt-h arrow'></i><img src="imgs/icon_2.png" alt="plastic-2" /><img src="imgs/icon_1.png" alt="plastic-1" /><img src="imgs/icon_1.png" alt="plastic-1" />
                    </div>
                    <div className={styles.tile}>
                        <img src="imgs/icon_2.png" alt="plastic-2" /><img src="imgs/icon_1.png" alt="plastic-1" /><img src="imgs/icon_1.png" alt="plastic-1" /><img src="imgs/icon_1.png" alt="plastic-1" />
                    </div>
{/*                     <div className={styles.tile}>
                        <img src="imgs/icon_2.png" alt="plastic-2" /><img src="imgs/icon_5.png" alt="plastic-5" /><img src="imgs/icon_3.png" alt="plastic-3" /><img src="imgs/icon_4.png" alt="plastic-4" />
                    </div> */}
                </div>
                <p><FormattedMessage {...messages.intro2paras2}/></p>
                <GoButton onClick={handleClick}/>
            </div>
        </MessageCanvas>
    );
};
export const Introduction3 = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(generalStateActions.updateCanvas(canvasTypes.startGame));
    };
    return (
        <MessageCanvas>
            <div className={styles.intro3}>
                <p><FormattedMessage {...messages.intro3paras1} 
                    values={{goal: <span className={styles.nextGoal}>{techScoreGoals[0]}</span>}}/>
                </p>
                <div className={styles.nonreSeries}>
                    <div className={styles.tile}>
                        <img src="imgs/icon_3.png" 
                        alt="plastic-3" />
                    </div> &nbsp; <FormattedMessage {...messages.intro3or}/> &nbsp;
                    <div className={styles.tile}>
                        <img src="imgs/icon_6.png" 
                        alt="plastic-6" />
                    </div> &nbsp; <FormattedMessage {...messages.intro3or}/> &nbsp;
                    <div className={styles.tile}>
                        <img src="imgs/icon_7.png" 
                        alt="plastic-7" />
                    </div>
                </div>
                <p><FormattedMessage {...messages.intro3paras2}/></p>
                <GoButton onClick={handleClick}/>
            </div>
        </MessageCanvas>
    );
};

export const StartGame = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        playMatchSound(); // ios requires user interactio to play sound, so trying to initiate
        dispatch(generalStateActions.startGame());
    }

    return (
        <MessageCanvas>
            <div className={styles.startGame}>
                <p className={styles.textCenter}><FormattedMessage {...messages.startParas1}/></p>
                <p><FormattedMessage {...messages.startParas2} /></p>
                <p><FormattedMessage {...messages.startParas3} values={{time: <strong>{timeLimit}</strong>}}/></p>
                <div className={styles.hourGlass}>
                    <Hourglass />                
                </div>
                <GoButton onClick={handleClick}/>
            </div>
        </MessageCanvas>
    );
};

export const GameOver = () => {

    const score = useSelector(state => state.results.score);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(resultsActions.resetScore());
        dispatch(badgesActions.reset());
        dispatch(generalStateActions.startGame());
    };

    return (
        <MessageCanvas>
            <div className={styles.gameOver}>
                <p className={styles.textCenter} id="over"><FormattedMessage {...messages.gameOver}/></p><br />
                <p className={styles.textCenter}><FormattedMessage {...messages.gameOverScore}/> <span>{score}</span></p>
                <AgainButton onClick={handleClick}/>
            </div>
        </MessageCanvas>
    );
};

export const Congratualtion = () => {

    const score = useSelector(state => state.results.score);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(badgesActions.reset());
        dispatch(resultsActions.resetScore());
        dispatch(generalStateActions.startGame());
    };

    return (
        <MessageCanvas>
            <div className={styles.congrat}>
                <p className={styles.textCenter}>
                    <FormattedMessage {...messages.congratParas1}/>
                </p>
                <p className={styles.textCenter}><FormattedMessage {...messages.congratScore}/> <span className={styles.finalScore}>{score}</span></p>
                <AgainButton onClick={handleClick}/><br />
                <img src="imgs/gray-and-green-turtle.jpg" alt="turtle"></img>
            </div>
        </MessageCanvas>
    );
};

export const PopUpTechSelection = () => {
    const dispatch = useDispatch();
    const badges = useSelector(state => state.badges.badges);

    const handleSelection = (event) => {
        const newTech = Number(event.target.dataset.id);
       
        dispatch(generalStateActions.addRemovablePlastic(newTech));
        dispatch(badgesActions.addBadge(newTech + 1));
        dispatch(generalStateActions.togglePause());
    };

    return (
        <MessageCanvas>
            <div className={styles.popUpTech}>
                <p ><FormattedMessage {...messages.techSelection}/></p><br />
                {nonrecyclablePlasticInx.map(plasticInx => 
                    !badges.includes(plasticInx + 1) && <div 
                    className={styles.selectTechButton} 
                    key={`select${plasticInx + 1}`} 
                    onClick={handleSelection} 
                    data-id={plasticInx}>
                        <FormattedMessage {...messages.techSelectionCreate}/>
                        {` ${plasticInx + 1}`}
                    </div>
                    )}

            </div>
        </MessageCanvas>
    );
};