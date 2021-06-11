import CartoonSparkle from '../../../assets/sounds/cartoon-sparkle.wav';

const SoundEffect = new Audio(CartoonSparkle);

const MatchSound = () => {
    SoundEffect.play();
    return null;
}

export default MatchSound;