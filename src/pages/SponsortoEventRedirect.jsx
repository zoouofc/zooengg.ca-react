// Importing Components from node_modules
import React, {useEffect} from 'react';

const SponsortoEventRedirect = () => {
    useEffect(() => {
        window.location.href = 'https://zooengg.ca/calendar';
      }, []);
    return (

    <div className="page--body sponsors">
      <h1>This page will redirect to our events page</h1>
    </div>
  )};
  
  export default SponsortoEventRedirect;
  