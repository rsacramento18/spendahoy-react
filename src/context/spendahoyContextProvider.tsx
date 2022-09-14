import React, { useReducer, createContext, useContext } from "react";

interface SpendahoyContextType {
  month: number,
  categoryIdEdit: number ,
  dispatch: React.Dispatch<any>;
}

const initialState: SpendahoyContextType = {
  month: new Date().getMonth() + 1,
  categoryIdEdit: 1,
  dispatch: () => {},
};


export const SpendahoyContext = createContext(initialState);

const spendahoyReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'UPDATE_MONTH':
      return { ...state, month: action.payload };
    case 'UPDATE_CATEGOY_ID_EDIT':
      return { ...state, categoryIdEdit: action.payload };
    default: 
      return state; 
  }
}

export const SpendahoyProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(spendahoyReducer, initialState);

  return (
    <SpendahoyContext.Provider value={{month: state.month, categoryIdEdit: state.categoryIdEdit, dispatch}}>
      { children }
    </SpendahoyContext.Provider>
  );
}
