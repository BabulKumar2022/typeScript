import React, { ChangeEvent, FormEvent, useState } from 'react';

interface User {
name: string,
job: string
}

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null)
    const handleIncrease= ():void =>{
        setCounter(counter +1 )
    
    }
    const hadleUserSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const userData ={
            name: 'Adam',
            job: 'Dev'
        }
        setUser(userData)
    }
 
    const handleNameChange =(e: ChangeEvent<HTMLInputElement>): void =>{

    } 

    return (
        <div>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default Counter;