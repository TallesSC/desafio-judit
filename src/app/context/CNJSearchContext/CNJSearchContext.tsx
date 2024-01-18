import React, { useState } from 'react';

interface CNJSearchContext {
  CNJ: string,
  setCNJ: React.Dispatch<React.SetStateAction<string>>,
}
export const CNJSearchContext = React.createContext<CNJSearchContext>({} as CNJSearchContext);
export function CNJSearchProvider({children}: React.PropsWithChildren) {
  const [CNJ, setCNJ] = useState('');

  return (
    <CNJSearchContext.Provider value={{CNJ, setCNJ}}>
      {children}
    </CNJSearchContext.Provider>
  )
}