import { useState, ReactNode, createContext } from 'react';

type themeMode = 'light' | 'dark';

interface ThemeProps {
  children: ReactNode;
}

interface ThemeContextType {
  mode: string;
  toggleTheme: () => void;
}

const defaultTheme: ThemeContextType = {
  mode: 'light',
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultTheme);

const ThemeProvider = ({ children }: ThemeProps) => {
  const [mode, setMode] = useState<themeMode>('light');

  const toggleTheme = () => {
    console.log(mode);

    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ mode, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider, ThemeContext };
