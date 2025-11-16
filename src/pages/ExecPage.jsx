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
        Hey there! I’m Rumaisa, entering my final year of Software Engineering and thrilled to serve as your President for the 2025-2026 ZOO Council. 
        As former VP Academic (2022-2023), I've seen our community's impact and am eager to continue that momentum with a dedicated team. 
        This includes fostering connections across all year levels and supporting initiatives that matter to you - such as academic support, industry engagement, and social activities.
        I want ZOO to stay a welcoming space where every idea and voice is valued. 
        If you have feedback, questions, or just want to chat, my inbox is always open. Can't wait to see what we'll accomplish this year!
        <br />
      </ExecCard>

      <ExecCard
        imageSource={academic}
        alt="academic-headshot"
        name="Devon Calvin" // Change name for new Exec
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
        Hi, I'm Harold, entering my third year of Software Engineering, and I'm
        one of the Academic Co-VPs for this year. Quick facts about me: I'm
        Korean, I like to watch hockey(🍁) and tennis, and I'm a great person to
        talk to 1 on 1! Joining ZOO has helped me open up to people and build up
        the courage to explore new opportunities, like this Academic VP
        position. I'm committed to representing Software and Electrical students
        well, and I hope to see you at our academic events this year!
      </ExecCard>

      <ExecCard
        imageSource={events}
        alt="events-headshot"
        name="Akila Virendra Fernando" // Change name for new Exec
        councilPosition="Co-VP Events"
        email="events@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Greetings, I'm Akila and I'm currently in my 3rd year for software
        engineering and will be Mr. Co VP events this year for ZOO. The reason I
        joined ZOO was to uphold our departments dominance in Schulich and make
        sure everyone knows about the army we control. I will be doing this by
        hosting wholesome and heartwarming events that bring all of us together
        in unison. In the end my goal will be to make sure everyone says “ZOO is
        the best society ever, our society could never be as good as ZOO”
      </ExecCard>

      <ExecCard
        imageSource={events2}
        alt="events-headshot"
        name="Samipya Rijal" // Change name for new Exec
        councilPosition="Co-VP Events"
        email="events@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hi! My name is Samipya, and I going to my third year of Electrical and
        Computer Engineering, and I am excited to be one of the Co-VP Events for
        Zoo this year. I look forward to working with the rest of the Zoo
        Council in planning amazing events for all electrical and software
        students to meet new people, form better connections and to have fun. If
        you have any questions or just want to say hi, don't hesitate to contact
        me as I happy to meet new people.
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
        Hello! My name is Andy Wang, and I am entering my third year in the
        Electrical and Computer Engineering program. As one of this year's Co-VP
        Finance, I am dedicated to ensuring that ZOO will be the wealthiest
        society in Schulich. From obtaining Haskayne's Blessing for Good Fortune
        to gaining the support of valued sponsors, ZOO is well on its way to
        reaching the moon.
        <br />
        <br />
        I look forward to helping finance the impactful events we have
        planned this year and ensuring every dollar spent will support our
        members in the best way possible. If you have any inquiries about ZOO or
        are interested in funding our society, please feel free to reach out to
        me.
      </ExecCard>

      <ExecCard
        imageSource={finance2}
        alt="finance-headshot"
        name="Caleb Garcia" // Change name for new Exec
        councilPosition="Co-VP Finance"
        email="finance@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hello, I’m Caleb! I’m entering my third year of electrical engineering with a minor in aerospace engineering and am taking on the role of Co-VP Finance for ZOO. I’m looking forward to managing the monetary lifeblood of the society; making sure that we can continue to host events and bring value to the engineering community. 
        I’ve always been passionate about finance and am grateful for the opportunity to put my experience in asset optimization and strategic fund allocation to good use. 
        Some fun facts about me are that I collect rare metals, have a casual interest in decentralized finance, enjoy cooking, and would love to visit the Cayman Islands someday! 
        For any financial inquiries, please feel free to reach out. ZOO to the moon!
        <br />
      </ExecCard>

      <ExecCard
        imageSource={internal}
        alt="internal-headshot"
        name="Chloe Fulbrook" // Change name for new Exec
        councilPosition="Co-VP Internal"
        email="internal@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hey! I'm Chloe and I'm headed into my third year of Electrical and
        Biomedical Engineering. I'm excited to be one of your Co-VPs Internal
        this year! I'll be supporting the rest of your fantastic ZOO council,
        keeping you in the loop through social media and emails, and managing
        the homeroom. If you've got any comments or suggestions, or just want to
        say hello, feel free to reach out! Can't wait to see you at our events
        this year!
      </ExecCard>

      <ExecCard
        imageSource={internal2}
        alt="internal-headshot"
        name="Millaine Li" // Change name for new Exec
        councilPosition="Co-VP Internal"
        email="internal@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hello! My name is Millaine and I'm excited to be one of your Co-VP
        Internals for this year's ZOO Council! I'm a Software Engineering
        student with a mechatronics minor, and am passionate about bringing the
        ESE student body together by helping organize cool events and providing
        spaces for students to study, lounge and socialize. If you have any
        thoughts, questions, or comments, please don't hesitate to reach out!
      </ExecCard>
    </div>
  </div>
);

export default ExecPage;
