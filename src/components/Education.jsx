import React from 'react';
import { Box, Typography, Stack, Divider } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const educationData = [
  {
    title: 'Full-Stack Web Development',
    institution: '4Geeks Academy',
    period: '2024 - 2025',
    description:
      'Intensive hands-on program focused on full-stack web development. Covered technologies such as React, Python, Flask, SQL, JWT, and deployment.',
  },
  {
    title: 'Civil Engineering',
    institution: 'Universidad del Cauca, Colombia',
    period: '2017 – 2024',
    description:
      'Graduated with emphasis on project management, structural design, and infrastructure development.',
  },
];

const Education = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '70%',
        px: 4,
        py: 6,
        margin: '0 auto',
        backgroundColor: 'transparent',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 500,
          mb: 4,
          textShadow: '0 0 12px rgba(0, 0, 0, 0.67)',
          color: '#ffffff',
        }}
      >
        <SchoolIcon sx={{ fontSize: '2rem', verticalAlign: 'middle', mr: 1 }} />
        Education
      </Typography>

      <Stack spacing={4}>
        {educationData.map((item, idx) => (
          <Box key={idx}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                color: '#ffffff',
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: '#aaaaaa', mb: 1 }}
            >
              {item.institution} • {item.period}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#dddddd',
                lineHeight: 1.6,
                fontSize: '1.05rem',
              }}
            >
              {item.description}
            </Typography>
            {idx < educationData.length - 1 && (
              <Divider sx={{ my: 3, borderColor: '#444' }} />
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Education;
