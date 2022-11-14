import React from 'react';


const Avatar = (props) => {
    return (
        <li>
            <h2>{props.name}</h2>
            <img src={props.img} alt='' />
        </li>
    );
};

export default Avatar;
