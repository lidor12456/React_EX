import React from 'react';
import Avatar from './Avatar';


const AvatarMap = (props) => {
    return (
        <ul>
            {props.avatars.map((avatar) => (
                <Avatar name={avatar.name} img={avatar.img} />
            ))}
        </ul>
    );
};

export default AvatarMap;
