// Importing Components from node_modules
import React from "react";

// Import project-defined components
import ExecCard from "../components/ExecCard";

// Import Styling
import "../stylesheets/exec/ExecPage.scss";

// Importing Images
import president from "../assets/council/president.png";
import academic from "../assets/council/academic.png";
import academic2 from "../assets/council/academic2.png";
import events from "../assets/council/events.png";
import events2 from "../assets/council/events2.png";
import external from "../assets/council/external.png";
import external2 from "../assets/council/external2.png";
import finance from "../assets/council/finance.png";
import finance2 from "../assets/council/finance2.png";
import internal from "../assets/council/internal.png";
import internal2 from "../assets/council/internal2.png";

const ExecPage = () => (
  <div className="page--body exec">
    {/* Change for new school year */}
    <h2 className="page--title exec">ZOO Executive Council: 2025 - 2026</h2>
    <p className="page--description exec">
      Meet the leaders of today working to make things happen for all the
      Electrical, Software, and Computer Engineering students!
    </p>

    <div id="profile-grid">
      <ExecCard
        imageSource={president}
        alt="president-headshot"
        name="Rumaisa Talukder" // Change name for new Exec
        councilPosition="President"
        email="president@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={academic}
        alt="academic-headshot"
        name="Devon Robert Calvin" // Change name for new Exec
        councilPosition="Co-VP Academic"
        email="academic@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hi everyone, I'm Devon, I'm going into my third-year of Electrical and
        Computer Engineering, and I'm excited to be one of the Co-VP Academics!
        I look forward to working with the ZOO council to create more academic
        resources for students through the set up of programs I'd like to start
        such as PASS for department specific courses and bringing back the ZOO
        class resource bank. Furthermore, I want to maintain the and expand high
        standard for the academic events students have come to expect. I'm
        excited to be apart of this community and to advocate for students and
        their concerns. Don't be afraid to reach out, whether you have an issue
        or just want to say hi!
      </ExecCard>

      <ExecCard
        imageSource={academic2}
        alt="academic-headshot"
        name="Harold Kim" // Change name for new Exec
        councilPosition="Co-VP Academic"
        email="academic@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={events}
        alt="events-headshot"
        name="Akila Virendra Fernando" // Change name for new Exec
        councilPosition="Co-VP Events"
        email="events@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={events2}
        alt="events-headshot"
        name="Samipya Rijal" // Change name for new Exec
        councilPosition="Co-VP Events"
        email="events@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={external}
        alt="external-headshot"
        name="Marya Rachdi" // Change name for new Exec
        councilPosition="Co-VP External"
        email="external@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hello! My name is Marya and I'm very excited to serve as one of your VP
        Externals this year! As a third-year student pursuing a dual major in
        Electrical Engineering and Business, I'm passionate about helping the
        community and creating meaningful opportunities for my peers. In this
        role, I hope to strengthen ZOO's presence by building partnerships,
        securing sponsorships, and proudly representing our society. If you ever
        have questions, thoughts, or ideas to share, feel free to reach out!
      </ExecCard>

      <ExecCard
        imageSource={external2}
        alt="external-headshot"
        name="Yassin Shehata" // Change name for new Exec
        councilPosition="Co-VP External"
        email="external@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hey! I'm Yassin, a third-year Electrical and Computer Engineering
        student, and I'm excited to be one of your Vice Presidents External this
        year. I'm passionate about creating meaningful partnerships and helping
        bridge the gap between students and the industry. This year, I'll be
        working to bring in exciting sponsorships, networking opportunities, and
        events that benefit our entire community. If you have any questions or
        ideas, don't hesitate to reach out to me, I'm always happy to chat!
      </ExecCard>

      <ExecCard
        imageSource={finance}
        alt="finance-headshot"
        name="Andy Wang" // Change name for new Exec
        councilPosition="Co-VP Finance"
        email="finance@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={finance2}
        alt="finance-headshot"
        name="Caleb Garcia" // Change name for new Exec
        councilPosition="Co-VP Finance"
        email="finance@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={internal}
        alt="internal-headshot"
        name="Chloe Fulbrook" // Change name for new Exec
        councilPosition="Co-VP Internal"
        email="internal@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={internal2}
        alt="internal-headshot"
        name="Millaine Li" // Change name for new Exec
        councilPosition="Co-VP Internal"
        email="internal@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>
    </div>
  </div>
);

export default ExecPage;
