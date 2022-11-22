import { useState } from "react";

export const useCounter = (initialCounter) => {
  const [counter, setCounter] = useState(initialCounter);

  const add = () => {
    setCounter(() => {
      return counter + 1;
    });
  };
  const remove = () => {
    setCounter(() => {
      return counter - 1;
    });
  };
  const double = () => {
    setCounter(() => {
      return counter * 2;
    });
  };
  const divide = () => {
    setCounter(() => {
      return counter / 2;
    });
  };
  return { counter, add, remove, double, divide };
};
