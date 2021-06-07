import ReactAudioPlayer from 'react-audio-player';

const MatchSound = ({isMuted}) => {
    return <ReactAudioPlayer 
    src="sounds/cartoon-sparkle.wav" 
    autoPlay muted={isMuted}
    volume={0.5}/>;
};

export default MatchSound;