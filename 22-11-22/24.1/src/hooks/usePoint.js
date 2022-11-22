import { useState } from 'react';

export const usePoint = (initialPoint) => {
  const [point, setPoint] = useState(initialPoint);

  const moveRight = () => {
    setPoint((prev) => {
      return { ...prev, x: prev.x + 1 };
    });
  };
  const moveLeft = () => {
    setPoint((prev) => {
      return { ...prev, x: prev.x - 1 };
    });
  };
  const moveUp = () => {
    setPoint((prev) => {
      return { ...prev, y: prev.y + 1 };
    });
  };
  const moveDown = () => {
    setPoint((prev) => {
      return { ...prev, y: prev.y - 1 };
    });
  };
  return { point, moveDown, moveUp, moveLeft, moveRight };
};
