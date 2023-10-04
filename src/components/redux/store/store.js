import { createStore } from "redux";
import NoteReducer from "../reducers/reducers";


const store = createStore(NoteReducer);
export default store;   