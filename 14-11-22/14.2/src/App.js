import './App.css';
import React, { useState, useEffect } from 'react';
import AvatarMap from './components/AvatarMap';

function App() {
    const [avatars, setAvatars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetchAvatarHandler();
    }, []);
    const fetchAvatarHandler = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `https://randomuser.me/api/?results=10`
            );
            if (!response.ok) {
                throw new Error('Error');
            }
            const data = await response.json();
            
            const transformedAvatars = data.results.map((avatarData) => {
                return {
                    name: `${avatarData.name.first} ${avatarData.name.last}`,
                    img: avatarData.picture.large,
                };
            });
            setAvatars(transformedAvatars);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    };
const userSearch = (obj,string) => {
  for(let i in obj) {
    if (obj[i].name.includes(string)) {
      console.log(obj);
      //  return obj
  }

// else {
//   return
// }
}
}

    let content = <p>Found no Avatars.</p>;

    if (avatars.length > 0) {
        content = <AvatarMap avatars={avatars} />;
    }

    if (error) {
        content = <p>{error}</p>;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    }

    return (
        <>
        {console.log(avatars)}
            <input onChange={(e) => userSearch(avatars,e.target.value)} />
            <section>{content}</section>
        </>
    );
}

export default App;
