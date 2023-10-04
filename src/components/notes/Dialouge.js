import React from 'react'
import './notes.css'
import marked from 'marked'

export default function Dialouge({open , handleClose , note}) {

    const convertToHtml = (raw)=>{
        return{
            __html : raw
        }
    }


    if(open){
        return(
            <div className="open">
                <div className="dialouge">
                    <h1>
                        {
                            note.title
                        }
                    </h1>
                    <div dangerouslySetInnerHTML={convertToHtml(marked(note.body))} />
                    <button className="btn" onClick={handleClose}>
                        Close
                    </button>
                </div>
            </div>
        )
    }else{
        return(
            <div style={{display : "none"}}/>
        )
    }
}
