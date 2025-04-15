import { useState } from 'react';
import Todoform from '../todoform/todoform.jsx';
import Todos from '../todos/todos.jsx'
const Design=()=>{
    const [notes,setnotes]=useState([])
    const [notewillupdate,setnotewillupdate]=useState("")
    const [noteindex,setnoteindex]=useState("")
    const handelAddtodo=(newNote)=>
    {
        setnotes([...notes, newNote]);
    }
    const handeldelete=(noteindex)=>{
      const filternotes= notes.filter((note1,index)=>{
         return    index != noteindex
       })
       
       setnotes(filternotes)
    }
    const getnoteindex=(noteindex)=>{
         const noteupdate=notes.find((note,index)=>{
              return noteindex==index
         })
         setnoteindex(noteindex)
         setnotewillupdate(noteupdate)
    }
    const handelnoteupdated=(updatednote)=>{
        console.log("handelnoteupdated")
       
        const newNotes = [...notes]; // بنعمل نسخة
        newNotes.splice(noteindex, 1, updatednote); // بنعدّل النسخة
        setnotes(newNotes);
        setnotewillupdate("")
     
    }
    return(
        <>
        <Todoform Addnote={handelAddtodo} note={notewillupdate} onupdatednote={handelnoteupdated}/>
        <Todos todos={notes} ondelete={handeldelete} onupdate={getnoteindex}/>
        </>
        
        
    )
}
export default Design;