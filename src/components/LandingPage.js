import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppAppBar from './AppAppBar';
import Footer from './Footer';
import Hero from './Hero';
import Highlights from './Highlights';
import Pricing from './Pricing';
import FAQ from './FAQ';
import Features from './Features';
import getLPTheme from './getLPTheme';

const theme = getLPTheme();

function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppAppBar />
      <main>
        <Hero />
        <Highlights />
        <Features />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default LandingPage;
