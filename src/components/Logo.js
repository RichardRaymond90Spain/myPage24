import * as React from 'react';
import Box from '@mui/material/Box';

function Logo() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <img
        src="/treeLogo.jpeg"
        alt="Tree Logo"
        style={{ height: 40, width: 40, borderRadius: '50%' }}
      />
    </Box>
  );
}

export default Logo;
