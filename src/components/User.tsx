import React, { FC } from 'react';
import userModel from '../types/models';

// interface Props{
//     name: string,
//     age: number,
//     addUser: ()=> void
// } 
interface Props{
    user: userModel,
    addUser: (user: userModel) => void 
}

const User: FC<Props> = ({user, addUser}) => {

    return (
        <div>
               <h2>Hello,  {user.name} is age:{user.email}</h2> 
               <button onClick={() => addUser(user)}>Add me</button>                            
        </div>
    );
};

export default User;