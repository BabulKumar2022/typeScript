import React, { FC } from 'react';

interface Props{
    name: string,
    age: number
}

const User: FC<Props> = ({name, age}) => {

    return (
        <div>
               <h2>Hello,  {name} is age:{age}</h2>                             
        </div>
    );
};

export default User;