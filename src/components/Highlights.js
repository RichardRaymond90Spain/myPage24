import * as React from 'react';
import { Grid, Container, Typography, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const highlights = [
  {
    title: 'Text-to-Speech Project',
    description: 'Creating seamless text-to-speech applications with advanced AI.',
    image: '/sound.png', // Use the image URL here
  },
  {
    title: 'UI/UX Design Project',
    description: 'Innovative and user-friendly interface designs for web and mobile applications.',
    image: 'https://images.unsplash.com/photo-1532567621246-f0432eab0522?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Updated image URL
  },
  {
    title: 'Data Visualization Project',
    description: 'Transforming data into visually engaging and informative graphics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Use the image URL here
  },
];

function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" align="center" color="text.primary" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {highlights.map((highlight, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={highlight.image}
                    alt={highlight.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {highlight.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {highlight.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Highlights;
