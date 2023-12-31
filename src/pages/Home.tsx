﻿import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import HeaderBar from '../header/header.tsx';
import './home.css';
import banner from '../assets/banner.jpg';

export default function Home() {
    
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log("in homepage")
    return (
        <>
         <div className='navBar'>
            <HeaderBar />
        </div>
        <div style={{marginLeft:-190, width:60, display:"flex", height:478.5, flexDirection:"row"}}>
        <img src={banner} />
        </div>
       
          <Container maxWidth="md" sx={{marginTop:"20px"}}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome to PurrfectPaws !
            </Typography>
          </Container>
        <Container maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </>
  );

}