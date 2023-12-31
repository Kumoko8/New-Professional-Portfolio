import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import { Link } from 'react-router-dom';



function livenYourSpaceRequest() {
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
      <Button
        sx={{
          border: 'solid black',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
         
        }}
        component={Link}
        to="/contact"
      >
        <Typography variant="h4" component="span">
          Wanna Liven Your Space? Click here!
        </Typography>
      </Button>
    </Container>
  );
}

export default livenYourSpaceRequest;
