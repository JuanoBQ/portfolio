import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  Stack,
  IconButton,
} from '@mui/material';
import {
  GitHub,
  Launch,
  ArrowBackIos,
  ArrowForwardIos,
  CloudQueue,
} from '@mui/icons-material';
import { FaReact, FaPython, FaJs, FaBootstrap } from 'react-icons/fa';
import {
  SiFlask,
  SiPostgresql,
  SiJsonwebtokens,
  SiStripe,
} from 'react-icons/si';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

import SK1 from '../assets/SkillMatch.png';
import SK2 from '../assets/SkillMatch2.png';
import SW1 from '../assets/StarWars.png';
import SW2 from '../assets/StarWars2.png';

const projects = [
  {
    title: 'Skill Match',
    description:
      'A skill-matching platform for developers integrating secure login, structured data handling, and online payments.',
    images: [SK1, SK2],
    liveUrl: 'https://skill-match-2025.onrender.com',
    codeUrl: 'https://github.com/JuanoBQ/Skill_Match2025',
    techStack: [
      { name: 'React', icon: <FaReact color="#61dafb" /> },
      { name: 'Python', icon: <FaPython color="#3776AB" /> },
      { name: 'Flask', icon: <SiFlask color="#ffffff" /> },
      { name: 'SQL', icon: <SiPostgresql color="#336791" /> },
      { name: 'JWT', icon: <SiJsonwebtokens color="#f7df1e" /> },
      { name: 'Stripe', icon: <SiStripe color="#635bff" /> },
    ],
  },
  {
    title: 'Star Wars Blog',
    description:
      'An interactive blog exploring the Star Wars universe with dynamic data integration.',
    images: [SW1, SW2],
    liveUrl: 'https://star-wars-blog-6u2c.onrender.com',
    codeUrl: 'https://github.com/JuanoBQ/Star-Wars-Blog',
    techStack: [
      { name: 'React', icon: <FaReact color="#61dafb" /> },
      { name: 'JavaScript', icon: <FaJs color="#f7df1e" /> },
      { name: 'Bootstrap', icon: <FaBootstrap color="#7952b3" /> },
      { name: 'External API', icon: <CloudQueue style={{ color: '#cccccc' }} /> },
    ],
  },
];

const Projects = () => {
  const [imageIndex, setImageIndex] = useState(Array(projects.length).fill(0));

  const handleNext = (idx) => {
    setImageIndex((prev) =>
      prev.map((val, i) =>
        i === idx ? (val + 1) % projects[i].images.length : val
      )
    );
  };

  const handlePrev = (idx) => {
    setImageIndex((prev) =>
      prev.map((val, i) =>
        i === idx
          ? (val - 1 + projects[i].images.length) % projects[i].images.length
          : val
      )
    );
  };

  return (
    <Box
      sx={{
        width: '90%',
        maxWidth: '1100px',
        margin: '0 auto',
        minHeight: '100vh',
        paddingTop: '60px',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 500,
          color: '#ffffff',
          mb: 4,
        }}
      >
       <FolderOpenIcon sx={{ fontSize: '2rem', verticalAlign: 'middle', mr: 1 }} />
       My last projects
      </Typography>

      <Grid container spacing={3} justifyContent="flex-start">
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                width: 375,
                height: 540,
                backgroundColor: '#111111',
                borderRadius: '6px',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={
                    project.images[imageIndex[index]] || project.images[0]
                  }
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />

                <IconButton
                  onClick={() => handlePrev(index)}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    color: '#ffffffaa',
                    transform: 'translateY(-50%)',
                  }}
                >
                  <ArrowBackIos fontSize="small" />
                </IconButton>

                <IconButton
                  onClick={() => handleNext(index)}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    right: 0,
                    color: '#ffffffaa',
                    transform: 'translateY(-50%)',
                  }}
                >
                  <ArrowForwardIos fontSize="small" />
                </IconButton>
              </Box>

              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: 2, color: '#cccccc', lineHeight: 1.5 }}
                >
                  {project.description}
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  sx={{ gap: 1, mb: 2 }}
                >
                  {project.techStack.map((tech, idx) => (
                    <Chip
                      key={idx}
                      label={tech.name}
                      icon={tech.icon}
                      sx={{
                        backgroundColor: '#1a1a1a',
                        color: '#ffffff',
                        borderRadius: '12px',
                        border: '1px solid #444',
                        '& .MuiChip-icon': {
                          marginRight: 0,
                        },
                        minWidth: '100px',
                        justifyContent: 'start',
                      }}
                    />
                  ))}
                </Stack>

                <Box mt="auto">
                  <Stack direction="row" spacing={0}>
                    <Button
                      variant="contained"
                      startIcon={<Launch />}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        flex: 1,
                        borderRadius: 0,
                        backgroundColor: '#2a2a2a',
                        color: '#dddddd',
                        textTransform: 'none',
                        '&:hover': {
                          backgroundColor: '#3a3a3a',
                        },
                      }}
                    >
                      Live
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<GitHub />}
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        flex: 1,
                        borderRadius: 0,
                        backgroundColor: '#2a2a2a',
                        color: '#dddddd',
                        textTransform: 'none',
                        '&:hover': {
                          backgroundColor: '#3a3a3a',
                        },
                      }}
                    >
                      Code
                    </Button>
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
