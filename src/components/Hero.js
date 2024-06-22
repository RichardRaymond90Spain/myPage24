import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import AppAppBar from './AppAppBar'; // Import AppAppBar component

const features = [
  {
    icon: <img src="/logo512.png" alt="React Development" style={{ width: 40, height: 40 }} />,
    title: 'React Development',
    description: 'Building interactive UIs with React for a seamless user experience.',
  },
  {
    icon: <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*HwwQxWBnBRdAbWrV.png" alt="Scrum Work Mindset" style={{ width: 40, height: 40 }} />, 
    title: 'Scrum Work Mindset',
    description: 'Embracing Scrum for efficient project management and team collaboration.',
  },
  {
    icon: <img src="/copywritingIcon.png" alt="Copywriting" style={{ width: 40, height: 40 }} />,
    title: 'Copywriting',
    description: 'Crafting compelling and engaging content.',
  },
  {
    icon: <img src="/AiLogo.png" alt="AI-Driven Development" style={{ width: 40, height: 40 }} />,
    title: 'AI-Driven Development',
    description: 'Integrating AI technology to enhance user experiences.',
  },
];

const Hero = ({ mode, toggleColorMode }) => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} /> {/* Add AppAppBar here */}

      <Container
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '75vh',
            overflow: 'hidden',
            backgroundImage: 'url(https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 255, 0.1)',
              boxShadow: '0 0 20px 20px rgba(0, 0, 255, 0.2)',
              zIndex: -1,
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: 'clamp(2rem, 8vw, 3.5rem)',
              color: '#fff',
              textShadow: '0 0 15px rgba(173, 216, 230, 1)', // Light blue glow
            }}
          >
            Hi, I'm Richard.<br /> Let's build something amazing together.
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: '#fff',
              textShadow: '0 0 10px rgba(173, 216, 230, 0.8)', // Light blue glow
              width: { sm: '70%', md: '70%' },
              mt: 2,
            }}
          >
            Scroll down to see my work and find out how we can create something extraordinary.
          </Typography>
        </Box>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ alignItems: 'center', justifyContent: 'center', width: '100%', mt: 4, height: 'auto' }}
        >
          {features.map((feature, index) => (
            <Paper key={index} elevation={3} sx={{ p: 2, textAlign: 'center', width: { xs: '100%', sm: 'auto' } }}>
              {feature.icon}
              <Typography variant="h6" sx={{ color: 'black' }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'black' }}>
                {feature.description}
              </Typography>
            </Paper>
          ))}
        </Stack>
        <Stack
          spacing={2}
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' }, mt: 4 }}
        >
          <Button variant="contained" color="primary">Reach Out Now</Button>
          <Typography variant="caption" sx={{ textAlign: 'center', color: 'black' }}>
            With such a diverse background and skill set, let's build your project together.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
