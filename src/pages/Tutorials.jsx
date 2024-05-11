import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

function Tutorials() {
  // Sample data for tutorials
  const tutorials = [
    { id: 1, title: 'Tutorial 1', author: 'Author 1', videoLink: 'https://www.youtube.com/embed/BGXGdUj93BM?si=GpNi5-XdMhODFn56' },
    { id: 2, title: 'Tutorial 2', author: 'Author 2', videoLink: 'https://www.youtube.com/embed/N-15wUPnqpc?si=V7Jopghdodwsv2uf' },
    { id: 3, title: 'Tutorial 3', author: 'Author 3', videoLink: 'https://www.youtube.com/embed/KeNObkhENKQ?si=83g-Wy9ymSiC1cF5' },
    { id: 4, title: 'Tutorial 4', author: 'Author 4', videoLink: 'https://www.youtube.com/embed/KeNObkhENKQ?si=HnkMe5GOxbBUkKwh' },
    { id: 5, title: 'Tutorial 5', author: 'Author 5', videoLink: 'https://www.youtube.com/embed/AtczwTwhEaI?si=gsxCPDbE9wrLKaeo' },
    { id: 6, title: 'Tutorial 6', author: 'Author 6', videoLink: 'https://www.youtube.com/embed/QLBT4-iN2yg?si=a2soMCSU_6i8E9tB' },
    // Add more tutorial data as needed
  ];

  return (
    <div style={{ height: 'calc(100vh - 64px)', overflow: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Tutorials
      </Typography>
      <Grid container spacing={3}>
        {tutorials.map((tutorial) => (
          <Grid item key={tutorial.id} xs={12} sm={6} md={4} lg={6}>
            <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', height: '100%' }}>
              <Typography variant="h6">{tutorial.title}</Typography>
              <Typography variant="subtitle1">by {tutorial.author}</Typography>
              {/* YouTube video embed */}
              <iframe
                width="100%"
                height="200"
                src={tutorial.videoLink}
                title={tutorial.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Tutorials;
