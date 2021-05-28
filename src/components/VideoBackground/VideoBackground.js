import ReactPlayer from 'react-player/lazy';
import styles from './VideoBackground.module.scss';

const VideoBackground = () => {//  autoPlay={true} muted={true} loop={true} 
    return <ReactPlayer className={styles.myVideo} width={null} height={null} playing={true} muted={true} loop={true}  url='videos/underwater-vladimir-koshenkov.mp4'/>;
};

export default VideoBackground;