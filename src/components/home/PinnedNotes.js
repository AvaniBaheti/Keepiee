import React from 'react'
import Notes from '../notes/Notes'
import './home.css'
import Dialouge from '../notes/Dialouge';

export default function PinnedNotes({notes}) {

    const [open , setOpen] = React.useState(false);

    const [note , setNote] = React.useState(null);


    const handleClose = ()=>{
        setOpen(false)
    }
    

    const handleNote = (e)=>{
        setNote(e);
    }  

    

    if(!notes){
        return(
           <React.Fragment />
        )
    }
    else if(notes.length===0){
        return(
            <React.Fragment />
        )
    }
    return (
        <div style={{marginTop : 20}}>
            <p style={{fontSize: 20 , textAlign : "left" , marginLeft : "5%"}}>
               <em> Pinned Notes </em>
            </p>
            
            <div className="notes">
                <Dialouge open={open} handleClose={handleClose} note={note} />
                {
                    notes.map(eachNote=>{
                        if(eachNote.isArchived){
                           return <React.Fragment key={eachNote.id}></React.Fragment> 
                        }
                        else{
                            return(
                                    <div className="singlenote" key={eachNote.id}>
                                        <Notes note={eachNote}  handleNote={handleNote} setOpen={setOpen} />
                                    </div>
                            )
                        }
                    })
                }
              
            </div>
            <hr />
        </div>
    )
}
