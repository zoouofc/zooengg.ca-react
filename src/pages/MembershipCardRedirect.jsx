// Importing Components from node_modules
import React, {useEffect} from 'react';

const SponsorToEventRedirect = () => {
    useEffect(() => {
        window.location.href = 'https://zooengg.ca/calendar';
      }, []);

    return (
    <div className="page--body sponsors">
      <h1>Redirecting...</h1>
    </div>
  )};
  
  export default SponsorToEventRedirect;
  