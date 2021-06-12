import CartoonSparkle from '../../../assets/sounds/cartoon-sparkle.wav';

const SoundEffect = new Audio(CartoonSparkle);

const playMatchSound = () => {
    SoundEffect.play();
}

export default playMatchSound;