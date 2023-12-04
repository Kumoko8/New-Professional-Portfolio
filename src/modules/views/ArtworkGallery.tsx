import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import LoopVideo from '../components/LoopVideo';
import { Link } from 'react-router-dom';


const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
  zIndex: 0
}));

const ImageIconButton = styled(({ component, to, ...props }:{ component?: React.ReactNode, to?: string, [x: string]: any }) => {
  if (to) {
    return <Link to={to} {...props} />;
  }
  if (component) {
    return React.cloneElement(component as React.ReactElement<any>, props);
  }
  return <div {...props} />;


})(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 0,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    zIndex: -1,
    
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  
}));

const images = [
  {
    url: '/Tristan.png',
    title: 'Illustrations',
    width: '40%',
    href: '/artwork'
  },
  {
    component: <LoopVideo videoSource='web-preview.mp4' title='Web Design/Development'/>,
    title: 'Web Design/Development',
    width: '40%',
    href: '/projects'
  },
  {
    url: '/SeaweedLogo.png',
    title: 'Logos',
    width: '20%',
    href: '/logos'
  },
  
  {
    component: <LoopVideo videoSource='wolf-walk.mp4' title='Animation'/>,
    title: 'Animation',
    width: '30%',
    href: '/animations'
  },
  {
    url: '/HeartEP.png',
    title: 'Custom Artwork',
    width: '35%',
    href: '/custom'
  },
  {
    component: <LoopVideo videoSource='teachContent.mp4' title='Tutoring/Learning Content'/>,
    title: 'Tutoring/Learning Content',
    width: '35%',
    href: '/learning'
  },
  
  
  
  
 
];

export default function ArtworkGallery() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Services
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
              paddingBottom: 300,
            }}
            to={image.href}
            as={image.href ? Link : 'div'}
          >
            <>
              {image.url && (
                <>
                  <Box
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center 40%',
                      backgroundImage: `url(${image.url})`,
                    }}
                  />
                  <ImageBackdrop className="imageBackdrop" />
                </>
              )}
              {image.component && image.component}
              {image.url && (
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'common.white',
                    zIndex: 12,
                  }}
                >
                  <Typography
                    component="h3"
                    variant="h6"
                    color="inherit"
                    className={`imageTitle`}
                    sx={{
                      zIndex: 2,
                    }}
                  >
                    {image.title}
                    <div className="imageMarked" />
                  </Typography>
                </Box>
              )}
            </>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}