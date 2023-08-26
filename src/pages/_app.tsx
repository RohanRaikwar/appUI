import * as React from 'react';
import Head from 'next/head';
import '@/styles/globals.css'
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../createEmotionCache';
import theme from '../theme';
import { store } from '../redux/store'
import { Provider } from 'react-redux'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface EmployeeLeaveManagerProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function EmployeeLeaveManagerApp(props: EmployeeLeaveManagerProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Provider store={store}><Component {...pageProps} /></Provider>
        
      </ThemeProvider>
    </CacheProvider>
  );
}
