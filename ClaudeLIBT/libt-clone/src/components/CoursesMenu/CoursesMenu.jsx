import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
  Button,
  Paper,
  Popper,
  ClickAwayListener
} from '@mui/material';

const CoursesMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef(null);

  const open = Boolean(anchorEl);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    if (open) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsHovering(false);
  };

  const handleClickAway = () => {
    handleClose();
  };

  const handleMouseEnter = (event) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovering(true);
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    timeoutRef.current = setTimeout(() => {
      if (!isHovering) {
        setAnchorEl(null);
      }
    }, 150);
  };

  const handleMenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovering(true);
  };

  const handleMenuMouseLeave = () => {
    setIsHovering(false);
    timeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, 150);
  };

  const discoverItems = [
    'Diploma Courses',
    'Top-up Degrees',
    'Undergraduate',
    'Postgraduate',
    'Doctoral',
    'Course Finder'
  ];

  const studyModeItems = [
    'Distance Learning',
    'On-Campus Studies',
    'Work-Based Learning',
    'Self-Paced Learning'
  ];

  const subjectAreas = [
    'Business and Management',
    'Accounting and Finance',
    'Human Resources',
    'Computer Science and IT',
    'Cyber Security',
    'Education',
    'Healthcare',
    'Law',
    'Psychology',
    'Security and Intelligence'
  ];

  return (
    <Box>
      <Button
        id="courses-button"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={open ? 'courses-menu' : undefined}
        sx={{
          color: 'white',
          fontWeight: 500,
          fontSize: '16px',
          textTransform: 'none',
          padding: '8px 16px',
          '&:hover': {
            backgroundColor: 'rgba(255, 171, 0, 0.1)',
            color: '#ffab00'
          }
        }}
      >
        Courses
      </Button>

      <Popper
        id="courses-menu"
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        style={{ zIndex: 1300 }}
      >
        <ClickAwayListener onClickAway={handleClickAway}>
          <Paper
            onMouseEnter={handleMenuMouseEnter}
            onMouseLeave={handleMenuMouseLeave}
            role="menu"
            aria-labelledby="courses-button"
            aria-label="Courses navigation menu"
            sx={{
              width: '800px',
              maxWidth: '90vw',
              mt: 1,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
              borderRadius: '8px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              backgroundColor: 'white'
            }}
          >
        <Box
          sx={{
            display: 'flex',
            minHeight: '400px',
            p: 0
          }}
        >
          {/* Left Side - Discover & Study Modes */}
          <Box
            sx={{
              flex: 1,
              borderRight: '1px solid rgba(0, 0, 0, 0.08)',
              p: 3
            }}
          >
            {/* Discover Section */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: '#1976d2',
                  fontSize: '18px'
                }}
              >
                Discover
              </Typography>
              <List sx={{ p: 0 }}>
                {discoverItems.map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      p: 0,
                      mb: 1,
                      '&:hover': {
                        backgroundColor: 'rgba(25, 118, 210, 0.04)'
                      },
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    <ListItemText
                      primary={
                        <Link
                          href="#"
                          underline="none"
                          sx={{
                            color: '#555',
                            fontSize: '14px',
                            fontWeight: 400,
                            display: 'block',
                            p: 1,
                            '&:hover': {
                              color: '#1976d2'
                            }
                          }}
                        >
                          {item}
                        </Link>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Study Modes Section */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: '#1976d2',
                  fontSize: '18px'
                }}
              >
                Study Modes
              </Typography>
              <List sx={{ p: 0 }}>
                {studyModeItems.map((item, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      p: 0,
                      mb: 1,
                      '&:hover': {
                        backgroundColor: 'rgba(25, 118, 210, 0.04)'
                      },
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    <ListItemText
                      primary={
                        <Link
                          href="#"
                          underline="none"
                          sx={{
                            color: '#555',
                            fontSize: '14px',
                            fontWeight: 400,
                            display: 'block',
                            p: 1,
                            '&:hover': {
                              color: '#1976d2'
                            }
                          }}
                        >
                          {item}
                        </Link>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>

          {/* Right Side - Subject Areas */}
          <Box
            sx={{
              flex: 1,
              p: 3
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: '#1976d2',
                fontSize: '18px'
              }}
            >
              Subject Areas
            </Typography>
            <List sx={{ p: 0 }}>
              {subjectAreas.map((subject, index) => (
                <ListItem
                  key={index}
                  sx={{
                    p: 0,
                    mb: 1,
                    '&:hover': {
                      backgroundColor: 'rgba(25, 118, 210, 0.04)'
                    },
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  <ListItemText
                    primary={
                      <Link
                        href="#"
                        underline="none"
                        sx={{
                          color: '#555',
                          fontSize: '14px',
                          fontWeight: 400,
                          display: 'block',
                          p: 1,
                          '&:hover': {
                            color: '#1976d2'
                          }
                        }}
                      >
                        {subject}
                      </Link>
                    }
                  />
                </ListItem>
              ))}

              {/* Find A-Z Courses Link */}
              <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid rgba(0, 0, 0, 0.08)' }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: '#1976d2',
                    fontSize: '14px',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    p: 1,
                    borderRadius: '4px',
                    '&:hover': {
                      backgroundColor: 'rgba(25, 118, 210, 0.04)',
                      textDecoration: 'underline'
                    }
                  }}
                >
                  Find A-Z Courses →
                </Link>
              </Box>
            </List>
          </Box>
        </Box>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </Box>
  );
};

export default CoursesMenu;