export const useTheme = () => {
  const theme = window.localStorage.getItem('theme');

  const setTheme = (theme: 'dark' | 'light') => {
    window.localStorage.setItem('theme', theme);
  };

  return [theme, setTheme];
};
