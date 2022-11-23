import React, { useReducer, createContext, useContext } from "react";

interface ExpenseFile {
  id: number,
  file: HTMLInputElement
}

interface SpendahoyContextType {
  month: number,
  categoryIdEdit: number ,
  expenseFile: ExpenseFile[],
  dispatch: React.Dispatch<any>;
}

const initialState: SpendahoyContextType = {
  month: new Date().getMonth() + 1,
  categoryIdEdit: 1,
  expenseFile: [],
  dispatch: () => {},
};


export const SpendahoyContext = createContext(initialState);

const spendahoyReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'UPDATE_MONTH':
      return { ...state, month: action.payload };
    case 'UPDATE_CATEGOY_ID_EDIT':
      return { ...state, categoryIdEdit: action.payload };
    case 'ADD_FILE_UPLOAD':
      return {...state, expenseFile: [...action.payload] };
    default: 
      return state; 
  }
}

export const SpendahoyProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(spendahoyReducer, initialState);

  return (
    <SpendahoyContext.Provider value={{month: state.month, categoryIdEdit: state.categoryIdEdit, expenseFile:state.expenseFile, dispatch}}>
      { children }
    </SpendahoyContext.Provider>
  );
}
