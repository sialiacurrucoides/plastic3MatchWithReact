import styles from './Messages.module.scss';
import AgainButton from './Buttons/AgainButton';
import GoButton from './Buttons/GoButton';
import MessageCanvas from './MessageCanvas/MessageCanvas';
import { useSelector, useDispatch } from 'react-redux';
import { generalStateActions } from '../../store/index';
import { canvasTypes } from '../../constants/constants';

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
                <p >A three-match game where you cannot make the non-recyclable plastic pieces disappear.</p><br />
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
                    Aim for the next goal: <span className={styles.nextGoal}> 70</span>
                </p>
                <p>
                    reaching the goal allows you to develop <em>new</em> technologies to deal with non-recyclable plastic types:
                </p>
                <p>
                    <span className={`${styles.tech} ${styles.activatedTech}`}>3</span>
                    <span className={`${styles.tech} ${styles.activatedTech}`}>6</span>
                    <span className={`${styles.tech} ${styles.activatedTech}`}>7</span>
                </p>
                <br />
                <p>then you can <em>eliminate</em> the given number/plastic type!</p>
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
                <p className={styles.textCenter}>You WIN if less than 10 remained from 3/6/7!</p>
                <p>We, like Earth as we know it, are running ouf time...</p>
                <p>You've got <strong id="timeLimit">4</strong> minutes!</p>
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

    return (
        <MessageCanvas>
            <div className={styles.gameOver}>
                <p className={styles.textCenter} id="over">GAME OVER</p><br />
                <p className={styles.textCenter}>Your score: <span>{score}</span></p>
                <AgainButton />
            </div>
        </MessageCanvas>
    );
};

export const Congratualtion = () => {

    const score = useSelector(state => state.results.score);

    return (
        <MessageCanvas>
            <div className={styles.congrat}>
                <p className={styles.textCenter}>Amazing! You win. Keep this enthusiasm!</p><br />
                <img src="imgs/gray-and-green-turtle.jpg" alt="turtle"></img>
                <p className={styles.textCenter}>Your score: <span class="finalScore">{score}</span></p>
                <AgainButton />
                <p >Did you know? <span>{tips[Math.floor(Math.random() * tips.length)]}</span></p>
            </div>
        </MessageCanvas>
    );
};

export const PopUpTechSelection = () => {

    return (
        <MessageCanvas>
            <div className={styles.popUpTech}>
                <p class="text-center">Great work! Choose one type that you can handle from now on.</p><br />
                <div class="btn btn-secondary m-3 tech-btn" id="create-3">Create Tech 3!</div>
                <div class="btn btn-secondary m-3 tech-btn" id="create-6">Create Tech 6!</div>
                <div class="btn btn-secondary m-3 tech-btn" id="create-7">Create Tech 7!</div>
            </div>
        </MessageCanvas>
    );
};