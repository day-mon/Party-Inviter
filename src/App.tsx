import React, { useState } from 'react';
import List from './components/List';
import AddToList from './components/AddToList';
import './App.css';


export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string // optional

  }[] // an array
}
function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Shane Wiles",
      age: 20,
      url: ""
    }
  ])
  return (
    <div className="App">
      <h1>People Invited to my Party!</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople} />
    </div> 
  );
}

export default App;
