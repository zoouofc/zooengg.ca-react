// Importing Components from node_modules
import React from "react";

// Import project-defined components
import ExecCard from "../components/ExecCard";

// Import Styling
import "../stylesheets/exec/ExecPage.scss";

// Importing Images
import president from "../assets/council/president.png";
import academic from "../assets/council/academic.png";
import events from "../assets/council/events.png";
import external from "../assets/council/external.png";
import finance from "../assets/council/finance.png";
import internal from "../assets/council/internal.png";

const ExecPage = () => (
  <div className="page--body exec">
    {/* Change for new school year */}
    <h2 className="page--title exec">ZOO Executive Council: 2023 - 2024</h2>
    <p className="page--description exec">
      Meet the leaders of today working to make things happen for all the
      Electrical, Software, and Computer Engineering students!
    </p>

    <div id="profile-grid">
      <ExecCard
        imageSource={president}
        alt="president-headshot"
        name="Cris Canayon" // Change name for new Exec
        councilPosition="President"
        email="president@zooengg.ca"
      >
        Hi there! I am Cris Canayon and I have the honour to be your ZOO
        president for this year. I am a third year software major who's been
        involved in ZOO since my first year. In the past, I have served as VP
        Internal for ZOO and Co-Team Lead in AC Robotic's Sumobots team. Outside
        of uni, I'm a massive foodie who likes to travel and work out. Feel free
        to reach out to me if you have any questions, comments, or both!
      </ExecCard>

      <ExecCard
        imageSource={academic}
        alt="academic-headshot"
        name="Aly Mohamed" // Change name for new Exec
        councilPosition="VP Academic"
        email="academic@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={events}
        alt="events-headshot"
        name="Gurnoor Singh" // Change name for new Exec
      >
        councilPosition="VP Events" email="events@zooengg.ca"
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={external}
        alt="external-headshot"
        name="Dawson Van Vlaanderen" // Change name for new Exec
        councilPosition="VP External"
        email="external@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={finance}
        alt="finance-headshot"
        name="Mehvish Fatima Shakeel" // Change name for new Exec
        councilPosition="VP Finance"
        email="finance@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hey! I'm Mehvish, and I’ll be your Vice President of Finance this year!
        I'm currently entering my third year of software engineering, and I'm
        excited to bring my skill set to the role.
        <br />
        <br />
        At ZOO, I manage the council's finances and assist with sponsorships,
        working behind the scenes to ensure that all events and initiatives are
        properly funded and successful. In my free time, I enjoy working on new
        projects that excite me. If you have any questions or just want to chat,
        feel free to reach out to me , and I'm always happy to help in any way I
        can 🙂
      </ExecCard>

      <ExecCard
        imageSource={internal}
        alt="internal-headshot"
        name="Nimna Wijedasa" // Change name for new Exec
        councilPosition="VP Internal"
        email="internal@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hello! My name is Nimna Wijedasa. I am a third year Software Engineering
        student and I am your VP Internal. My job is to ensure that ZOO runs
        smoothly behind-the-scenes. Aside from ZOO, I am also a member in
        Relectric. Some of my other interests include fitness, playing my guitar
        and exploring nature. I am always happy to meet new people regardless of
        background, so feel free to get in touch!
      </ExecCard>
    </div>
  </div>
);

export default ExecPage;
