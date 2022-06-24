// Importing Components from node_modules
import React from 'react';

// Import project-defined components
import ExecCard from '../components/ExecCard';

// Import Styling
import '../stylesheets/exec/ExecPage.scss';

// Importing Images
import president from '../assets/council-pages/president.png';
import academic_software from '../assets/council-pages/academic-software.png';
import academic_electrical from '../assets/council-pages/academic-electrical.png';
import events from '../assets/council-pages/events.png';
import external from '../assets/council-pages/external.png';
import finance from '../assets/council-pages/finance.png';
import internal from '../assets/council-pages/internal.png';

const ExecPage = () => (
  <div className="page--body exec">
    {/* Change for new school year */}
    <h2 className="page--title exec">ZOO Executive Council: 2022 - 2023</h2>
    <p className="page--description exec">
      Meet the leaders of today working to make things happen for all the Electrical,
      Software, and Computer Engineering students!
    </p>

    <div id="profile-grid">
      <ExecCard
        imageSource={president}
        alt="president-headshot"
        name="Aleks Berezowski" // Change name for new Exec
        councilPosition="President"
        email="president@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Heyo! My name is Aleks, although, you might hear me going by a LOT of other names. I'm excited to be your President this year and do things, such as amazing events, awesome merch, and helping out students academically! My DM's are always open, and feel free to bug me anytime you see me 💙
      </ExecCard>

      <ExecCard
        imageSource={academic_software}
        alt="academic-headshot"
        name="Rumaisa Shoeb Talukder" // Change name for new Exec
        councilPosition="VP Academic Software"
        email="academic.software@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hey there! I'm Rumaisa and I'll be your VP Academic Software for the 2022-2023 Council. I'll be working with the Council to enhance your academic experience by organizing events, such as, an Internship Panel, Technical Elective Night and many more. Feel free to reach out if you have any inquiries, or comments on something you'd like to see us bring to you! 😊
      </ExecCard>

      <ExecCard
        imageSource={academic_electrical}
        alt="academic-headshot"
        name="Ben Pele" // Change name for new Exec
        councilPosition="VP Academic Electrical"
        email="academic.electrical@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hello there, my name is Ben and I will be your first VP Academic Electrical for ZOO. This may come as a surprise but I am indeed in 3rd year electrical engineering with a minor in digital engineering. I am excited to get to know as many of you as I can and plan a bunch of academic based events, like our Technical Elective night this year! Please get in touch with me if you have any questions or concerns, I’m happy to help out however I can.
      </ExecCard>

      <ExecCard
        imageSource={events}
        alt="events-headshot"
        name="Evan Cherewko" // Change name for new Exec
        councilPosition="VP Events"
        email="events@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={external}
        alt="external-headshot"
        name="Yashpreet Singh" // Change name for new Exec
        councilPosition="VP External"
        email="external@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hello! My name is Yashpreet and I'll be the VP External for ZOO! I can't wait to work with the rest of Council to plan and organize the Tech Fair, Speaker Series, Industry Events, and more this school year! Feel free to get in touch with me if you have any concerns or suggestions as I'll be happy to hear you 💙
      </ExecCard>

      <ExecCard
        imageSource={finance}
        alt="finance-headshot"
        name="Carter Zimmer" // Change name for new Exec
        councilPosition="VP Finance"
        email="finance@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={internal}
        alt="internal-headshot"
        name="Christian Canayon" // Change name for new Exec
        councilPosition="VP Internal"
        email="internal@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hello! My name is Christian Canayon, though I normally go by Cris. I am a second year Software Engineering student and I am currently the Interim VP Internal for the school year. My job is to ensure that ZOO runs smoothly behind-the-scenes. Aside from ZOO, I am also a Sumo Team Lead for AC Robotics. Some of my other interests include fitness, technology, and learning new things. I am always happy to meet new people regardless of background, so feel free to get in touch with the contact info below!
      </ExecCard>

    </div>
  </div>
);

export default ExecPage;
