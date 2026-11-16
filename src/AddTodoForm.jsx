import {useState} from "react";

export default function AddTodoForm({onAdd}){

    const [text,setText] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        const input = event.target.elements.text; 
        // …call onAdd with input.value (trimmed), then input.value = ""
        //const text = input.value.trim()

        if(text.trim() !== ""){
           onAdd(text.trim()) 
        }
        //input.value="";
        setText("")
    }
    // <form onSubmit={handleSubmit}>: an <input name="text" placeholder="Add a todo…"> + an "Add" button
    return(
        <form onSubmit={handleSubmit}>
            <input 
                name="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} //AI assisted in AI-USAGE.md
                placeholder="Add a todo..."
            />
            <button type="submit">Add</button>
        </form>
    );    
}