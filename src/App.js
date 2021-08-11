import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Popup from './Popup';
import style from './app.module.css';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count.count);

  let popup;
  if (count > 1 && count < 6){
    popup = '';
  } else if(count === 0){
    popup = '';
  } else {
    popup = <Popup/>;
  }

  return (
    <div className={style.app}>
       <input name="file" 
          type="file"
          id="input__file"
          className={style.input}
          multiple
          onChange={(e) => {dispatch({type: 'addFiles/count', payload: e.target.files})}}/>
       <label htmlFor="input__file" className={style.fileButton}>
          <span className={style.fileButtonText}>Add file</span>
       </label>
       {popup}
    </div>
  );
}

export default App;
