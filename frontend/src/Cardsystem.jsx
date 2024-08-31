import React from 'react';
import { Container,Card,CardContent,CardActions, Typography, Grid, Button, CardMedia} from '@mui/material';
export const Cardsystem = () => {  
  return (
    <Container>
      <Grid container spacing="4">
        <Grid item sm={3}>
          <Card>
            <CardMedia image='https://mui.com/static/images/cards/contemplative-reptile.jpg' height="140" component="img"/>
            <CardContent>
              <Typography variant='h5'>Post Title</Typography>
              <Typography variant='subtitle1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, fuga! Neque, cum doloribus commodi tempora.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>Share</Button>
              <Button>Read more</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={3}>
          <Card>
            <CardContent>
              <Typography variant='h5'>Post Title</Typography>
              <Typography variant='subtitle1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, fuga! Neque, cum doloribus commodi tempora.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>Read more</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={3}>
          <Card>
            <CardContent>
              <Typography variant='h5'>Post Title</Typography>
              <Typography variant='subtitle1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, fuga! Neque, cum doloribus commodi tempora.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>Read more</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={3}>
          <Card>
            <CardContent>
              <Typography variant='h5'>Post Title</Typography>
              <Typography variant='subtitle1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, fuga! Neque, cum doloribus commodi tempora.
              </Typography>
            </CardContent>
            <CardActions>
              <Button>Read more</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}
