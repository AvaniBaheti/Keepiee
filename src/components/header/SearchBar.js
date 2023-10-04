import React from 'react'
import { useDispatch } from 'react-redux';
import {Search} from '../redux/actions/actions';
import { AllNote } from '../redux/actions/actions';

export default function SearchBar() {
    const [serach , setSearch] = React.useState("");

    const dispatch = useDispatch();

    const handleChange = (e) =>{
        setSearch(e.target.value);
        dispatch(Search(e.target.value));
        if(serach.length<=1){
            dispatch(AllNote())
        }
    }

    const handleClose = ()=>{
        setSearch("")
        dispatch(AllNote())
    }

    return (
        <div>
             <input type="text" className="searchbar" value={serach} placeholder="SearchHere" onChange={handleChange} />
               
                {
                    (serach.length!==0)?(
                        <i onClick={handleClose} className="material-icons delete">delete</i>
                    ):(
                        ""
                    )
                }
        
        </div>
    )
}
