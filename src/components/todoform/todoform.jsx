import { useState,useEffect } from "react";

const Todoform = (props) => {
    const [inputValue, setInputValue] = useState("");
     console.log(props)
    // لما تتغير props.note نحطها في inputValue
    useEffect(() => {
        if (props.note) {
          setInputValue(props.note);
        }
      }, [props.note]);
    function addNote() {
        props.Addnote(inputValue)
        setInputValue("");
    }
    function updatenote()
    {
        console.log("update")
        console.log(props)
        props.onupdatednote(inputValue)
        setInputValue("")
       

    }
    return (
        <>
            {props.note ? <h2>{props.note}</h2> : ""}
            <div className="bg-pink-700 justify-center h-25 text-white text-3xl flex font-bold items-center">TODO</div>
            <div className="grid grid-cols-12 mx-auto mt-7" style={{ width: "90%" }} >
            <input
          type="text"
          className="mr-8 border-2 col-span-8"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
                <button className="bg-pink-700 text-white px-6 col-span-4" onClick={props.note==="" ? addNote : updatenote}>Add</button>
                
            </div>

        </>
    )
}
export default Todoform;