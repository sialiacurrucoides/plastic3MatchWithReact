import {IntlProvider} from 'react-intl';
import { useSelector } from 'react-redux';
import styles from './App.module.scss';
import Plastic3match from './components/Plastic3match/Plastic3Match';
import VideoBackground from './components/VideoBackground/VideoBackground';
import translations from './locales/locales';
import { DEFAULT_LANG_639_1_CODE } from './constants/constants';

function App() {

  const currentLanguage = useSelector(state => state.general.language);
  
  return (
    <IntlProvider 
    locale={currentLanguage}
    messages={translations[currentLanguage]}
    defaultLocale={DEFAULT_LANG_639_1_CODE}
    >
      <div className={styles.App}>
        <Plastic3match />
      </div>
      <VideoBackground />
    </IntlProvider>
  );
}

export default App;
