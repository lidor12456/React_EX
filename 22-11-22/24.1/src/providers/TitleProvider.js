import { createContext, useContext, useState } from 'react';

export const titleContext = createContext({ myState: 'Initial', setMyState: null });

export const useTitleContext = () => {
  const ctx = useContext(titleContext);

  return [ctx.myState, ctx.setMyState];
};

function TitleProvider({ children }) {
  const [myState, setMyState] = useState('Hola');

  return <titleContext.Provider value={{ myState, setMyState }}>{children}</titleContext.Provider>;
}

export default TitleProvider;
