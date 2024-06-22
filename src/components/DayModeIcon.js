import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

function DayModeIcon(props) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="5" fill="currentColor" />
      <line x1="12" y1="2" x2="12" y2="4" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="20" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" />
      <line x1="2" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="2" />
      <line x1="20" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" />
    </SvgIcon>
  );
}

export default DayModeIcon;
