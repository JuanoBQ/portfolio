import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '70%',
        px: 4,
        py: 6,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0 auto',
        backgroundColor: 'transparent',
        color: '#ffffff', 
        textAlign: 'left',
      }}
    >
      {/* Nombre */}
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 500,
          mb: 1,
          textShadow: '0 0 12px rgba(0, 0, 0, 0.67)',
          color: '#ffffff', 
        }}
      >
        Juan José Bravo
      </Typography>

      <Typography
        variant="h4"
        component="h3"
        sx={{
          fontWeight: 500,
          mb: 3,
          textShadow: '0 0 12px rgba(0, 0, 0, 0.67)',
          color: '#ffffff',
        }}
      >
        Full-Stack Developer
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: '1.15rem',
          lineHeight: 1.6,
          mb: 5,
          fontWeight: 400,
          color: '#ffffff', 
        }}
      >
        Full-Stack Developer with previous experience as Civil Engineer managing complex projects. I
        combine technical skills in React, Flask, and SQL with a strong ability to lead teams and
        execute results-oriented solutions. I have developed web applications such as Skill Match,
        integrating secure authentication, efficient data structures, and an online payment platform.
      </Typography>

      <Stack direction="row" spacing={3}>
        <Button
          variant="contained"
          href="https://github.com/JuanoBQ"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<GitHubIcon sx={{ color: '#fff' }} />}
          sx={{
            backgroundColor: '#121212',
            fontWeight: 600,
            borderRadius: '8px',
            padding: '12px 24px',
            boxShadow: 'none',
            textTransform: 'none',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#333333',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.53)',
            },
          }}
        >
          GitHub
        </Button>

        <Button
          variant="contained"
          href="https://www.linkedin.com/in/juan-jos%C3%A9-bravo-6aa0518a"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<LinkedInIcon sx={{ color: '#fff' }} />}
          sx={{
            backgroundColor: '#121212',
            fontWeight: 600,
            borderRadius: '8px',
            padding: '12px 24px',
            boxShadow: 'none',
            textTransform: 'none',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#333333',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.53)',
            },
          }}
        >
          LinkedIn
        </Button>
      </Stack>
    </Box>
  );
};

export default About;
