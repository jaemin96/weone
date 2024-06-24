import { useEffect } from 'react';
import { useTheme } from '../../hooks';
import { Button } from '../Button';

const ThemeSwitch = () => {
  const { mode, toggleTheme } = useTheme();

  useEffect(() => {
    console.log({ mode });
  }, [mode]);

  return (
    <Button primary onClick={toggleTheme}>
      모드 변경
    </Button>
  );
};

export default ThemeSwitch;
