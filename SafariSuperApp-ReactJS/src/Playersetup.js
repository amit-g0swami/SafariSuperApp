import React from 'react'
import "./Playersetup.css";
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';

function Playersetup() {
    return (
        <div className="footer">
      <div className="icons">
        <ul>
          <li><ShuffleIcon /></li>
          <li><SkipPreviousIcon /></li>
          <li><PauseCircleFilledIcon /></li>
          <li><SkipNextIcon /></li>
          <li><RepeatIcon /></li>
        </ul>
      </div>
      </div>
    )
}

export default Playersetup
