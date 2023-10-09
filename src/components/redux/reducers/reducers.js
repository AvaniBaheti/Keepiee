let notes = JSON.parse(localStorage.getItem('notes')) || []

function NoteReducer(state = notes , action){ 
    switch (action.type){
        case "AddNote":{
            const data = [...state,action.value];
            localStorage.setItem('notes' , JSON.stringify(data))
            return[
            ...state ,
            action.value
            ]
        }
        case "DeleteNote":{
            const updatedNote = state.filter(eachNote=>{
                if(action.value===eachNote.id){
                    return false
                }
                return true
            })
            localStorage.setItem('notes' , JSON.stringify(updatedNote))
            return[
                ...updatedNote
            ]
        }

        case "UpdateArchiveNote":{
            const updatedNote = state.filter(eachNote=>{
                if(action.value===eachNote.id){
                    eachNote.isArchived = !eachNote.isArchived;
                    return true
                }
                return true
            })
            localStorage.setItem('notes' , JSON.stringify(updatedNote))
            return[
                ...updatedNote
            ]
        }

        case "UpdatePinnedNote":{
            const updatedNote = state.filter(eachNote=>{
                if(action.value===eachNote.id){
                    eachNote.isPinned = !eachNote.isPinned;
                    return true
                }
                return true
            })
            localStorage.setItem('notes' , JSON.stringify(updatedNote))
            return[
                ...updatedNote
            ]
        }

        case "Search":{
            const updatedNote = state.filter(eachNote=>{
                if(eachNote.title.toLowerCase().includes(action.value)|| eachNote.body.toLowerCase().includes(action.value)){
                    return true
                }
                return false
            })
            return [...updatedNote]
        }

        case "AllNote":{
            const data  =  JSON.parse(localStorage.getItem('notes')) || [];
            return data;
        }

        default : return state
    }
}


export default NoteReducer;
