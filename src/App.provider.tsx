import React, {createContext, useCallback, useContext, useState} from 'react';
import {MoodOptionType, MoodOptionWithTimestamp} from './types';

type AppContextType = {
  moodList: MoodOptionWithTimestamp[];
  handleSelectMood: (mood: MoodOptionType) => void;
};

const AppContext = createContext<AppContextType>({
  moodList: [],
  handleSelectMood: () => {},
});

interface AppProvideProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProvideProps> = ({children}) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = useCallback((selectedMood: MoodOptionType) => {
    setMoodList(current => [
      ...current,
      {mood: selectedMood, timestamp: Date.now()},
    ]);
  }, []);
  return (
    <AppContext.Provider value={{moodList, handleSelectMood}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
