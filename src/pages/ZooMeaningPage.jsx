// Importing Components from node_modules
import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

// Import Styling
import '../stylesheets/ZooMeaningPage.scss';

// Importing impages
import zoo1 from '../assets/zoo-pages/meaningOfZOO1.png';
import zoo2 from '../assets/zoo-pages/meaningOfZOO2.png';

const ZooMeaningPage = () => (
  <div className="page--body meaning">
    <h2 className="page--title meaning">Meaning of ZOO</h2>
    <p id="zoo-description">
      The meaning behind ZOO has been a long-standing question amongst many people, Council members
      included. Many have saught after the meaning, yet no story has been considered the absolute
      truth. Despite this fact, there is one story in particular that stands out; the one story that is
      commonly used by the Society when asked the age-old question. This story, provided by a ZOO
      Alumni, was written as follows:
    </p>
    <br />

    <p className="zoo-story">
      As of today, we may [be] even greater goofballs than we were in 1974. But that was the
      year where we started. Some would say it was a cold winter day; others would say it was quite
      sunny. But we do know that there was a group of students who wanted to prove a point to their
      professor Dr. R. B. S. Jr. This [story, as I've been told], was a professor who would go an
      entire class without looking at his students and just writing on the blackboard. So this day,
      in early 1974, an entire class of 4th year Electrical Engineering students decided to skip
      his class and see if their prof would even notice.
    </p>
    <br />

    <p className="zoo-story">
      The group stuffed all of their jackets full, added some fake faces, and skipped out to
      Dinny&#39;s Den. A few of them hid in the class to see the reaction, but it nearly took half
      the class. Once the prof finally realized his class was inordinately quiet, he finally turns
      around and realizes that he is being pranked. He just exclaims that the class is a ZOO, and
      walks out.
    </p>

    <hr />

    <p className="foot-note">
      The name stuck, and from 1974 until forever, we have been, and will be, recognized as ZOO.
    </p>

    <div id="zoo-story--image-lightbox">
      <SRLWrapper>
        <img
          src={zoo1}
          className="zoo-story--image"
          alt="The Electrical ZOO"
        />
        <img
          src={zoo2}
          className="zoo-story--image"
          alt="The Electrical ZOO"
        />
      </SRLWrapper>
    </div>

  </div>
);

export default ZooMeaningPage;
