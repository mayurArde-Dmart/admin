import React, { useEffect, useState } from 'react';
import { blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useLocation } from 'react-router-dom';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  dark?: boolean;
}

const Theme: React.FC<Props> = ({ children, ...rest }: Props) => {
  const path = window.location.pathname;
  const [currentLocation, setcurrentLocation] = useState<string>('/');
  useEffect(() => {
    setcurrentLocation(path);
  }, [path]);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#046D39',
      },
      secondary: blue,
      text: {
        secondary: '#000000db',
      },
      warning: {
        main: '#F7B500',
      },
      error: {
        main: '#F44336',
      },
      success: {
        main: '#6DD400',
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: 'rgba(4, 109, 57, 0.05)',
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            minHeight: 56,
          },
        },
      },
    },
  });

  return (
    // <div {...rest} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
    // </div>
  );
};

export default Theme;
