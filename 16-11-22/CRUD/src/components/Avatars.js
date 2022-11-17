import React from "react";
import Avatar from "./Avatar";

function Avatars({ avatarsArr, inputValue }) {
  const insertAvatars = () => {
    let filteredAvatars = avatarsArr;
    if (inputValue) {
      filteredAvatars = avatarsArr.filter((avatar) =>
        avatar.title.includes(inputValue)
      );
    }
    return filteredAvatars.map((avatar) => (
      <Avatar key={avatar.title} data={avatar} />
    ));
  };
  return <>{insertAvatars()}</>;
}

export default Avatars;
