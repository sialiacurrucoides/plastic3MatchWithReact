 import styles from './App.module.scss';
import Plastic3match from './components/Plastic3match/Plastic3Match';
import VideoBackground from './components/VideoBackground/VideoBackground';

function App() {

  return (
    <>
      <div className={styles.App}>
        <Plastic3match />
      </div>
      <VideoBackground />
    </>
  );
}

export default App;
