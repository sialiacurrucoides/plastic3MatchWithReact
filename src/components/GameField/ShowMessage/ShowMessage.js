import { useSelector } from 'react-redux';

import * as Messages from '../../Messages/Messages';
import { canvasTypes } from '../../../constants/constants';


const ShowMessage = () => {
    const state = useSelector(state => state.general.canvasToShow);

    switch (state){
        case canvasTypes.intro1:
            return <Messages.Introduction1 />;
        case canvasTypes.intro2:
            return <Messages.Introduction2 />;
        case canvasTypes.intro3:
            return <Messages.Introduction3 />;
        case canvasTypes.startGame:
            return <Messages.StartGame />;
        case canvasTypes.gameOver:
            return <Messages.GameOver />;
        case canvasTypes.congrat:
            return <Messages.Congratualtion />;
        case canvasTypes.selectTech:
            return <Messages.PopUpTechSelection />;
        default: return null;
    }
};

export default ShowMessage;