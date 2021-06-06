import ReactPlayer from 'react-player/lazy';
import styles from './VideoBackground.module.scss';

const VideoBackground = () => {

    if (window.screen.width < 500) return null;
    return <ReactPlayer className={styles.myVideo} width={null} height={null} playing={true} muted={true} loop={true}  url='videos/underwater-vladimir-koshenkov.mp4'/>;
};

export default VideoBackground;