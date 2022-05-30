import React from 'react';
import User from './User';

const Users = () => {
    return (
        <div>
            <h1>Users</h1>
            <User name="Salam" age={66} ></User>
        </div>
    );
};

export default Users;