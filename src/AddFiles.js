import React from 'react';
import style from "./app.module.css";
import {useDispatch} from "react-redux";

function AddFiles(){
    const dispatch = useDispatch();

    function countFiles(e){
        dispatch({type: 'addFiles/count', payload: e.target.files});
        e.target.value = null;
    }

    return(
        <React.Fragment>
            <input name="file"
                   type="file"
                   id="input__file"
                   className={style.input}
                   multiple
                   onChange={countFiles}/>
            <label htmlFor="input__file" className={style.fileButton}>
                <span className={style.fileButtonText}>Add file</span>
            </label>
        </React.Fragment>
    )
}

export default AddFiles;