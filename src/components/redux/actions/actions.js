export function addNote(value){
    return{
        type : "AddNote",
        value : value
    }
}

export function DeleteNote(value){
    return {
        type : "DeleteNote",
        value : value
    }
}

export function UpdateNote(value){
    return{
        type : "UpdateArchiveNote",
        value : value
    }
}

export function UpdatePinnedNote(value){
    return{
        type : "UpdatePinnedNote",
        value : value
    }
}

export function ArchiveNote(value){
    return{
        type : "Archive",
        value : value
    }
}


export function Search(value){
    return{
        type : "Search",
        value : value
    }
}

export function AllNote(){
    return {
        type : "AllNote"
    }
}
