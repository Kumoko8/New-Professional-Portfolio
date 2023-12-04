import * as React from 'react';
import ArtworkGallery from '../modules/views/ArtworkGallery';
import ContactRequestIntake from '../modules/views/ContactRequestIntake';
import AppFooter from '../modules/views/AppFooter';
import DevProjects from '../modules/views/DevProjects';
import LearnSomethingNew from '../modules/views/LearnSomethingNew';
import VisionHero from '../modules/views/VisionHero';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';
import Box from '@mui/material/Box';
import Paper from '../modules/components/Paper';
import ProductHero from '../modules/views/ProductHero';
import Typography from '../modules/components/Typography';

const illustrations = [
    {
      imageSrc: '/Tristan.png',
      title: 'Role Play Universe',
      url: '/'
    },
    {
      imageSrc: '/Aly.png',
      title: 'Birthday Gifts',
      url: '/'
      
    },
    {
      imageSrc: '/Nolan.png',
      title: 'Commissions',
      url: '/'
    },
  ];
 

const projectButton = 
  {
    label: 'Back',
    url: '/'
  }

function Projects() {

  return (
    <React.Fragment>
      <AppAppBar />
      <DevProjects projects={illustrations} sectionTitle='Illustrations' button={projectButton}/>
    
      
      
      


    </React.Fragment>
)}
export default withRoot(Projects);
