import React from 'react';
import { Box } from '@mui/material';
export const Boxsystem = () => {
  return <>
    <Box
      p={2}
      sx={{
        width: "50%",
        height: 100,
        borderRadius: 1,
        bgcolor: 'red',
        '&:hover': {
          bgcolor: 'primary.dark',
        },
      }}
    >
        <h1>This is Box</h1>
    </Box>
  </>
}
