import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, AppBar, Toolbar, Box } from '@mui/material';
import CoursesMenu from './CoursesMenu';

// Create a theme for Material UI
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const CoursesMenuDemo = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" color="transparent" elevation={1}>
        <Toolbar>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <CoursesMenu />
            {/* Other navigation items would go here */}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Demo content */}
      <Box sx={{ p: 4 }}>
        <h1>CoursesMenu Component Demo</h1>
        <p>Hover or click on the "Courses" button above to see the mega menu in action!</p>

        <h2>Features:</h2>
        <ul>
          <li>✅ Material UI components (Menu, Box, Typography, Button, List)</li>
          <li>✅ Hover and click functionality</li>
          <li>✅ Two-column layout with flex Box</li>
          <li>✅ Left side: Discover & Study Modes sections</li>
          <li>✅ Right side: Subject Areas with A-Z courses link</li>
          <li>✅ Responsive design</li>
          <li>✅ Hover effects and smooth transitions</li>
          <li>✅ Outside click handling</li>
          <li>✅ Modern styling with Material UI sx prop</li>
        </ul>
      </Box>
    </ThemeProvider>
  );
};

export default CoursesMenuDemo;