import React, { createContext, useContext, useState } from 'react';


export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);

  

  return (
    <GoalsContext.Provider value={{ goals, setGoals }}>
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoals = () => {
  return useContext(GoalsContext);
};
