import React, { useState } from "react";
import { IState as Props} from "../App";


interface IProps {
    people: Props["people"];
    setPeople: React.Dispatch<React.SetStateAction<{
        name: string;
        age: number;
        url: string;
        note?: string | undefined;
    }[]>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        name:  "",
        age: "",
        note: "",
        url: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
        setInput({
            ...input, // input element
            [event.target.name]: event.target.value
            // the code above is basically getting the target name of the event and changing the value of that with what was passed through 
        })
    }

    const handleClick = ( ): void => {

        // add checks


            setPeople([
                ...people,
                {
                    name: input.name,
                    age: parseInt(input.age), // age in text box is actually string not a number
                    url: input.url
                }
            ])
            
    }

    return (
        <div className="AddToList">
            <input 
                type="text" 
                placeholder="name" 
                name="name" 
                className="AddToList-input"
                value={input.name}
                onChange={handleChange}
            />
            <input 
                type="number" 
                placeholder="age" 
                name="age" 
                className="AddToList-input"
                value={input.age}
                onChange={handleChange}

            />
            <input 
                type="text" 
                placeholder="url" 
                name="url" 
                className="AddToList-input"
                value={input.url}
                onChange={handleChange}

            />
            <textarea 
                placeholder="Note" 
                name="note" 
                className="AddToList-input"
                value={input.note}
                onChange={handleChange}

            />

            <button 
            className="AddToList-btn"
            onClick={handleClick}
            >
                Add to list
            </button>
        </div>
    )
}

export default AddToList;