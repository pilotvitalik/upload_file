import React from 'react';
import { useDispatch } from 'react-redux';
import style from './app.module.css';

function Popup(){
	const dispatch = useDispatch();

	return(
		<div className={style.popup} onClick={() => {dispatch({type: 'addFiles/zeroingCount', payload: 0})}}>
         <div className={style.errorPopup}>
          <button type='button' onClick={() => {dispatch({type: 'addFiles/zeroingCount', payload: 0})}}>
            &#65794;
          </button>
          <h3>Error</h3>
          <p>Please add not less than 2 and not more than 5 files.</p>
          <button type='button' onClick={() => {dispatch({type: 'addFiles/zeroingCount', payload: 0})}}>
            Ок
          </button>
         </div>
       </div>
	)
}

export default Popup;