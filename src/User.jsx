import React from 'react';


const User = ({user}) => {
    console.log(user);
    const {name, username, email, address}= user;
    return (
        <div className='card'>
            <h3>Name: {name}</h3>
            <h4>User: {username}</h4>
            <h5>Email: {email}</h5>
            

        </div>
    );
};

export default User;