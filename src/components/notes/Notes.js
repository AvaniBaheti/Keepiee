import React from 'react'
import marked from 'marked';
import './notes.css'
import { useDispatch } from 'react-redux';
import { DeleteNote , UpdateNote , UpdatePinnedNote} from '../redux/actions/actions';


export default function Notes(props) {

    const dispatch = useDispatch();
     
    const convertToHtml = (raw)=>{
        return {__html : raw}
    }

    const deleteNote =  (e)=>{
        dispatch(DeleteNote(e));
        
    }

    const updateArchived = (e)=>{
        dispatch(UpdateNote(e))
    }

    const updatePinned = (e)=>{
        dispatch(UpdatePinnedNote(e))
    }

    

    return (
        <div className="container">
            <div className="container-body" onClick={()=>{props.handleNote(props.note); props.setOpen(true)}}>
                <h3>
                    {
                    props.note.title
                    }
                </h3>
                <br/>
                {
                    (props.note.body)?(
                        <div dangerouslySetInnerHTML={convertToHtml(marked(props.note.body))} />
                    ):(
                        <div />
                    )
                }
                
            </div>
            <div className="options hide">
                <ul>
                    <li>
                        <acronym title="delete">
                            <i className="material-icons" onClick={()=>deleteNote(props.note.id)}>delete</i>
                        </acronym>
                    </li>
                    {props.note.isArchived?(
                        <li>
                            <acronym title="unarchive">
                            <i className="material-icons" onClick={()=>{updateArchived(props.note.id)}}>unarchive</i>
                            </acronym>
                        </li>
                    ):(
                        <li>
                            <acronym title="archive">
                            <i className="material-icons" onClick={()=>{updateArchived(props.note.id)}}>archive</i>
                            </acronym>
                         </li>
                    )}

                    {props.note.isPinned?(
                        <li>
                            <acronym title="Remove Pin">
                                <i className="material-icons" onClick={()=>updatePinned(props.note.id)}>person_pin</i>
                            </acronym>
                        </li>
                        ):(
                            <li>
                                <acronym title="Pin">
                                 <i className="material-icons" onClick={()=>updatePinned(props.note.id)}>person_pin</i>
                                </acronym>
                            </li>
                        )
                    }
                    
                    
                </ul>
            </div>
        </div>
    )
}
