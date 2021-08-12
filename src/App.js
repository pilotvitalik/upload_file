import React from 'react';
import { useSelector } from 'react-redux';
import Popup from './Popup';
import ListFiles from './ListFiles';
import AddFiles from './AddFiles';
import style from "./app.module.css";

function App() {
  const count = useSelector(state => state.count.count);

  let popup;
  if (count > 1 && count < 6){
    popup = <ListFiles/>;
  } else if(count === 0){
    popup = <AddFiles/>;
  } else {
    popup = <Popup/>;
  }

  return (
    <div className={style.app}>
       {popup}
    </div>
  );
}

export default App;
