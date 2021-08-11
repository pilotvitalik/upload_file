import React from 'react';
import style from './app.module.css';

function App() {
  return (
    <div className={style.app}>
       <input name="file" type="file" id="input__file" class={style.input} multiple/>
       <label htmlFor="input__file" class={style.fileButton}>
          <span class={style.fileButtonText}>Add file</span>
       </label>
    </div>
  );
}

export default App;
