import React, { createContext } from "react";

export const Context = createContext({});

type Props = {
  children: React.ReactNode;
  value: any;
};

function AppContext({ children, value }: Props): JSX.Element {
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default AppContext;
