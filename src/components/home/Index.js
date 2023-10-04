import React from 'react'
import {useSelector} from 'react-redux'
import Home from './NormalNotes';
import AddNote from '../notes/AddNote';
import PinnedNotes from './PinnedNotes'


export default function Index() {
    const notes = useSelector(state=>state);

    const [pinnedNotes , setPinnedNotes] = React.useState([]);

    const [normalNotes , setNormalNotes] = React.useState([]);


    React.useEffect(()=>{
        let data = notes.filter(eachNote=>{
            if(eachNote.isPinned&&eachNote.isArchived===false){
                return true;
            }
            return false;
        })

        setPinnedNotes(data);

        data = notes.filter(eachNote=>{
            if(!eachNote.isPinned&&!eachNote.isArchived){
                return true
            }
            return false
        })

        setNormalNotes(data);

    },[notes])

    if(pinnedNotes.length===0&&normalNotes.length===0){
        return(
            <div className="mainpage">
                <AddNote />
                <h4>
                    Notes you add appear here <span role="img" aria-label="smileEmoji">😄</span>
                </h4>
            </div>
        )
    }
    return (
        <div className="mainpage">
            <AddNote />
            <PinnedNotes notes={pinnedNotes} />
            <Home notes={normalNotes} />
        </div>
    )
}
