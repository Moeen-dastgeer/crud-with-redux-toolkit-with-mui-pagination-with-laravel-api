import React from 'react';
import { Container,Typography,Button,Grid,Paper} from '@mui/material';
export const GridSystem = () => {
  return< Container>
        <Grid container spacing={4} columns={14}>
            <Grid item lg={4} sm={6} md={3}>
                <Paper>
                    <Typography variant="h3">This is Heading</Typography>
                    <Typography variant="subtitle1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                </Paper>
            </Grid>
            <Grid item lg={3} sm={6} md={4}>
                <Paper>
                    <Typography variant="h3">This is Heading</Typography>
                    <Typography variant="subtitle1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                </Paper>
            </Grid>
            <Grid item lg={4} sm={6} md={3}>
                <Paper>
                    <Typography variant="h3">This is Heading</Typography>
                    <Typography variant="subtitle1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    </Container>
}
