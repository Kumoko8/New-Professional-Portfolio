import * as React from 'react';
import DevProjects from '../modules/views/DevProjects';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';


const illustrations = [
    {
      imageSrc: '/Tristan.png',
      title: 'Role Play Universe',
    },
    {
      imageSrc: '/Aly.png',
      title: 'Birthday Gifts',
    },
    {
      imageSrc: '/Nolan.png',
      title: 'Commissions',
    },
  ];
 

const projectButton = 
  {
    label: 'Back',
    url: '/'
  }

function Artwork() {

  return (
    <React.Fragment>
      <AppAppBar />
      <DevProjects projects={illustrations} sectionTitle='Illustrations' button={projectButton}/>
    
      
      
      


    </React.Fragment>
)}
export default withRoot(Artwork);
