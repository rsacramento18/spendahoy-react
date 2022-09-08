import React, { useReducer, createContext, useContext } from "react";

interface StateType {
  month: number;
}

interface SpendahoyContextType {
  state: StateType,
  dispatch: React.Dispatch<any>;
}

const initialState: SpendahoyContextType = {
  state: {
    month: new Date().getMonth() + 1,
  },
  dispatch: () => {},
};


export const SpendahoyContext = createContext(initialState);

const spendahoyReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'UPDATE_MONTH':
      return action.payload;
    default: 
      return state; 
  }
}

export const SpendahoyProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(spendahoyReducer, initialState);

  return (
    <SpendahoyContext.Provider value={{state, dispatch}}>
      { children }
    </SpendahoyContext.Provider>
  );
}
