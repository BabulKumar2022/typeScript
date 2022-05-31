import React, { useEffect, useState } from 'react';
import userModel from '../types/models';
import User from './User';

const Users = () => {
    const [users, setUser] =useState<userModel[]>([]);
    const [team, setTeam] = useState<userModel []>([]);

    useEffect(() =>{
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    })

    const handleAddUser = (user: userModel): void =>{
        const newTeam = [...team, user];
        setTeam(newTeam);

    }
    return (
        <div>
            <h1>Users</h1>
            <h3>Team size:{team.length}</h3>
            {/* <User name="Salam" age={66} addUser={handleAddUser} ></User> */}


            {
               users.map(user => <User user={user} addUser={handleAddUser} ></User>) 
            }
        </div>
    );
};

export default Users;