import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import Hero from './Hero';
import Highlights from './Highlights';
import Features from './Features';
import Footer from './Footer';
import Pricing from './Pricing';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import AppAppBar from './AppAppBar';

function MyHomepage({ mode, toggleColorMode }) {
  return (
    <div>
      <CssBaseline />
      <AppAppBar/>
      <br/> <br/> <br/> <br/>
      


      <Hero />
      <Highlights />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default MyHomepage;
