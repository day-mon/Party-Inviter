import { ListenOptions } from "net";
import React from "react";

interface IProps {
    people: {
      name: string
      age: number
      url: string
      note?: string // optional
  
    }[] // an array
  }

const List: React.FC<IProps> = ( {people} ) => {

    const renderList = (): JSX.Element[] => {
        return people.map((person) => {
            return (
                <li className="List">
                <div className="List-header">
                    <img className="List-image" src={person.url}></img>
                    <h2> {person.name} </h2>
                </div>
                <p>{person.age} years old</p>
                <p className="note">{person.note}</p>
            </li>
            )
        })
    }
    return (

        <ul>
          {renderList()}
        </ul>
    )

}

export default List;
