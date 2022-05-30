import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';

function App() {

let student: string = '5'
let age: number = 99;
let isSmart: boolean = true;
let dtudents: string [] = ['1212', '33', '445'];

interface Person {name: string, job: string, age: number}

const person: Person ={
  name: "Billets",
  job: "teacher",
  age: 334
}

const handleAddUser = (name: string, age: number, address: string): string =>{
  const total: number = 79;
  console.log(name, age, address)
  return address
}

  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
    </div>
  );
}

export default App;
