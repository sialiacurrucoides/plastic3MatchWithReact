import English from './translations/eng.json';
import Hungarian from './translations/hu.json';
import { languages } from '../constants/constants';

const translations = {
    [languages[0]]: English,
    [languages[1]]: Hungarian
};

export default translations;