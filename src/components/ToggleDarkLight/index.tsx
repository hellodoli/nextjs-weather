import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import Button from '@/components/buttons/Button';

const ToggleDarkLight = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleMode = () => {
    const toggleTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(toggleTheme);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant='ghost' className='visible min-h-[38px]' disabled>
        ...Loading
      </Button>
    );
  }

  return (
    <>
      <Button
        onClick={toggleMode}
        variant={theme === 'dark' ? 'light' : 'dark'}
        disabled={!mounted}
      >
        Set to {theme === 'dark' ? 'light' : 'dark'}
      </Button>
    </>
  );
};

export default ToggleDarkLight;
