import 'src/global.css';
import 'src/styles/index.scss';

import Fab from '@mui/material/Fab';

import { Router } from 'src/routes/sections';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import { ThemeProvider } from 'src/theme/theme-provider';

import { Iconify } from 'src/components/iconify';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  useEffect(() => {
    console.log('Cookies: ', Cookies.get('accessToken'));
  }, []);

  const githubButton = (
    <Fab
      size="medium"
      aria-label="Github"
      href="https://github.com/nguoividai"
      sx={{
        zIndex: 9,
        right: 20,
        bottom: 20,
        width: 44,
        height: 44,
        position: 'fixed',
        bgcolor: 'grey.800',
        color: 'common.white',
      }}
    >
      <Iconify width={24} icon="eva:github-fill" />
    </Fab>
  );

  return (
    <ThemeProvider>
      <Router />
      {githubButton}
    </ThemeProvider>
  );
}
