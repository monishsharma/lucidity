import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';


const Widget = ({
    title,
    icon,
    value
}) => {
  return (
    <Box  m={1} flexBasis="22%" minWidth="200px">
    <Card style={{ backgroundColor: '#2E2E2E', color: '#FFFFFF' }}>
      <CardContent style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '40px' }}>{icon}</div>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="h4" component="div">
          {value}
        </Typography>
      </CardContent>
    </Card>
  </Box>
  )
}

export default Widget
