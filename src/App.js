import React from 'react';
import { useDispatch } from 'react-redux';
import style from './app.module.css';

function App() {
  const dispatch = useDispatch();

  function addFiles(e){
    dispatch({type: 'addFiles/count', payload: e.target.files});
  }

  return (
    <div className={style.app}>
       <input name="file" type="file" id="input__file" className={style.input} multiple onChange={addFiles}/>
       <label htmlFor="input__file" className={style.fileButton}>
          <span className={style.fileButtonText}>Add file</span>
       </label>

       <div className={style.popup}>
         <div className={style.errorPopup}>
          <button type='button'>
            &#65794;
          </button>
          <h3>Error</h3>
          <p>Please add not less than 2 and not more than 5 files.</p>
          <button type='button'>
            Ок
          </button>
         </div>
       </div>
    </div>
  );
}

export default App;
