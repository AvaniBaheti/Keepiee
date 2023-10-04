import React from 'react'
import {addNote} from '../redux/actions/actions';
import { useDispatch } from 'react-redux';
import uuid from 'uuid';

export default function AddNote() {
    const [title , setTitle] = React.useState("");

    const [body , handleBody] = React.useState(null);

    const [hidden , toggleHide] = React.useState(true);

    const [isArchived , setArchived ] = React.useState(false);

    const [isPinned , setPinned ] = React.useState(false);

    
    const handleTitleChange = (e)=>{
        setTitle(e.target.value);
    }

    const handleBodyChange = (e)=>{
        handleBody(e.target.value);
    }

    const dispatch = useDispatch();

    const handleSave = (e)=>{
        if(title||body){
            dispatch(addNote({title,body , isArchived , isPinned , id : uuid() }));
            toggleHide(true)
            setArchived(false);
            setPinned(false);
            setTitle("");
            handleBody(null);
        }

        toggleHide(true)
        
    }



    return (
        <div className="editor">
            <div className="title">
                <input type="text" value={title} placeholder="Title" onClick={()=>toggleHide(false)} onChange={handleTitleChange}/>
            </div>
            {!hidden?(
                 <div className="body">
                    <textarea placeholder="Add Description Here..." onChange={handleBodyChange}></textarea>
                    <div className="buttongroup">
                        <button className="button">
                            <acronym title="Archive Note">
                              <i className="material-icons" onClick={()=>setArchived(true)}>archive</i>
                            </acronym>
                            
                        </button>
                        <button  className="button">
                            <acronym title="Pin Note">
                                 <i className="material-icons" onClick={()=>{setPinned(true);}}>person_pin</i>
                            </acronym>
                        </button>
                        <button  className="button close" type="submit" onClick={handleSave}>
                            Close
                        </button>
                       
                    </div>
                </div>
            ):(
                <div/>
            )}
        </div>
    )
}
