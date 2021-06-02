import styles from './Messages.module.scss';
import AgainButton from './Buttons/AgainButton';
import GoButton from './Buttons/GoButton';
import MessageCanvas from './MessageCanvas/MessageCanvas';
import { useSelector, useDispatch } from 'react-redux';
import { generalStateActions, resultsActions, badgesActions } from '../../store/index';
import { canvasTypes, timeLimit, nonrecyclablePlasticInx, techScoreGoals } from '../../constants/constants';

const tips = [
    "7 stands for 'other types' of plastic",
    "Metalized films usually cannot be recycled even if the plastic type is PP.",
    "You can use reusable bags for buying fruits and vegetables.",
    "Buying from the local market is more eco-friendly."
];

export const Introduction1 = () => {
    const dispatch = useDispatch();

    const handleClick = () => {console.log("clicked");
        dispatch(generalStateActions.updateCanvas(canvasTypes.intro2));
    };

    return (
        <MessageCanvas>
            <div className={styles.intro1}>
                <h3 >Welcome to Plastic3match!</h3>
                <p >A three-match game where you can only make the recyclable plastics disappear.</p><br />
                <p >Unless... You develop new technologies.</p>
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
                <p className="text-center intro p-3">Switch <strong>ANY</strong> adjacent pieces!</p>
                <div className={styles.stepsAnimation}>
                    <div className={styles.tile}>
                        <img src="imgs/icon_1.png" alt="plastic-1" /><i className='fas fa-arrows-alt-h arrow'></i><img src="imgs/icon_2.png" alt="plastic-2" /><img src="imgs/icon_1.png" alt="plastic-1" /><img src="imgs/icon_1.png" alt="plastic-1" />
                    </div>
                    <div className={styles.tile}>
                        <img src="imgs/icon_2.png" alt="plastic-2" /><img src="imgs/icon_1.png" alt="plastic-1" /><img src="imgs/icon_1.png" alt="plastic-1" /><img src="imgs/icon_1.png" alt="plastic-1" />
                    </div>
                    <div className={styles.tile}>
                        <img src="imgs/icon_2.png" alt="plastic-2" /><img src="imgs/icon_5.png" alt="plastic-5" /><img src="imgs/icon_3.png" alt="plastic-3" /><img src="imgs/icon_4.png" alt="plastic-4" />
                    </div>
                </div>
                <p>...by clicking on each or by dragging one </p>
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
                <p>
                    If you reach the next goal (score<span className={styles.nextGoal}>{techScoreGoals[0]}</span>)
                </p>
                <p>
                    you can <em>eliminate</em> one of the non-recyclable plastic types
                </p>
                <div className={styles.nonreSeries}>
                    <div className={styles.tile}>
                        <img src="imgs/icon_3.png" 
                        alt="plastic-3" />
                    </div> &nbsp; or &nbsp;
                    <div className={styles.tile}>
                        <img src="imgs/icon_6.png" 
                        alt="plastic-6" />
                    </div> &nbsp; or &nbsp;
                    <div className={styles.tile}>
                        <img src="imgs/icon_7.png" 
                        alt="plastic-7" />
                    </div>
                </div>
                <br />
                <p>by developing a new technology!</p>
                <GoButton onClick={handleClick}/>
            </div>
        </MessageCanvas>
    );
};

export const StartGame = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(generalStateActions.startGame());
    }

    return (
        <MessageCanvas>
            <div className={styles.startGame}>
                <p className={styles.textCenter}>You WIN if you got all the badges: 3/6/7!</p>
                <p>We, like Earth as we know it, are running ouf time...</p>
                <p>You've got <strong id="timeLimit">{timeLimit}</strong> minutes to develop a new tech!</p>
                <div className={styles.hourGlass}>
                    <i className="fa fa-hourglass-2"></i>                   
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
                <p className={styles.textCenter} id="over">GAME OVER</p><br />
                <p className={styles.textCenter}>Your score: <span>{score}</span></p>
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
                <p className={styles.textCenter}>Amazing! You win. Keep this enthusiasm!</p><br />
                <img src="imgs/gray-and-green-turtle.jpg" alt="turtle"></img>
                <p className={styles.textCenter}>Your score: <span class="finalScore">{score}</span></p>
                <AgainButton onClick={handleClick}/>
                <p >Did you know? <span>{tips[Math.floor(Math.random() * tips.length)]}</span></p>
            </div>
        </MessageCanvas>
    );
};

export const PopUpTechSelection = () => {
    const dispatch = useDispatch();

    const handleSelection = (event) => {
        const newTech = Number(event.target.dataset.id);
       
        dispatch(generalStateActions.addRemovablePlastic(newTech));
        dispatch(badgesActions.addBadge(newTech + 1));
        dispatch(generalStateActions.togglePause());
    };

    return (
        <MessageCanvas>
            <div className={styles.popUpTech}>
                <p >Great work! Choose one type that you can handle from now on.</p><br />
                {nonrecyclablePlasticInx.map(plasticInx => 
                    <div 
                    className={styles.selectTechButton} 
                    key={`select${plasticInx + 1}`} 
                    onClick={handleSelection} 
                    data-id={plasticInx}>
                        {`Create Tech ${plasticInx + 1}`}
                    </div>)}

            </div>
        </MessageCanvas>
    );
};