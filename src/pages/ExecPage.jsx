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

const ExecPage = () => (
  <div className="page--body exec">
    {/* Change for new school year */}
    <h2 className="page--title exec">ZOO Executive Council: 2024 - 2025</h2>
    <p className="page--description exec">
      Meet the leaders of today working to make things happen for all the
      Electrical, Software, and Computer Engineering students!
    </p>

    <div id="profile-grid">
      <ExecCard
        imageSource={president}
        alt="president-headshot"
        name="Yashpreet Singh" // Change name for new Exec
        councilPosition="President"
        email="president@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hello! My name is Yashpreet, and I'm entering my final year of Electrical Engineering. I've been part of ZOO for the better part of my academic journey and have always loved being part of this close-knit community. This year, I'm excited to serve as the president of ZOO, and I look forward to ensuring everyone has the best experience possible. Feel free to message or email me if you have any concerns or just want to say hi!
      </ExecCard>

      <ExecCard
        imageSource={academic}
        alt="academic-headshot"
        name="Jun Chao" // Change name for new Exec
        councilPosition="Co-VP Academic"
        email="academic@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hi everyone, I'm Jun, a third-year Electrical and Computer Engineering student, and I'm excited to be one of the Co-VPs Academics! I look forward to working with the ZOO council to create more academic events such as research nights, workshops, and other academic (or not) related events! If you see me in the hallway, feel free to come up and say hi. I love meeting people, and you can catch me at random events if there's food involved!
      </ExecCard>

      <ExecCard
        imageSource={academic2}
        alt="academic-headshot"
        name="Simon Xu" // Change name for new Exec
        councilPosition="Co-VP Academic"
        email="academic@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hello! I'm Simon Xu, entering my final year of Electrical Engineering at the University of Calgary. Throughout my academic journey, I've been deeply involved in ZOO, a community I cherish. This year, alongside Jun Chao, I have the privilege of serving as Co-VP Academic for ZOO, where we are dedicated to enhancing our academic programs and ensuring everyone has a fantastic experience. Feel free to reach out via message or email with any questions or just to say hello!
      </ExecCard>

      <ExecCard
        imageSource={events}
        alt="events-headshot"
        name="Aaryan Deshpande" // Change name for new Exec
        councilPosition="Co-VP Events"
        email="events@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hi! My name is Aaryan, I'm currently a third-year Electrical and Computer Engineering student, and I'm excited to take on the role of VP Events this year! I'm excited to bring the electrical and software community closer together with some exciting events, and I definitely look forward to bringing students with more opportunities to meet their peers, network, and have fun! If you ever have any questions, comments or suggestions, you can always reach out to our email and I'll be happy to chat. Cheers to a great year!
      </ExecCard>

      <ExecCard
        imageSource={events2}
        alt="events-headshot"
        name="Cody Diao" // Change name for new Exec
        councilPosition="Co-VP Events"
        email="events@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hello! My name is Cody, I'm currently a third-year Electrical Engineering student, and I'm thrilled to take on the role of VP Events this year! I'm excited about making an impact through the events we'll be hosting, by providing diverse opportunities for networking and fun. As part of ZOO, we're committed to bringing engaging activities and events to the community. If you have any questions or event suggestions, please feel free to reach out. Cheers to a fun and exciting year together!
      </ExecCard>

      <ExecCard
        imageSource={external2}
        alt="external-headshot"
        name="Arshiya Shaheen" // Change name for new Exec
        councilPosition="Co-VP External"
        email="external@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hello everyone, my name is Arshiya and I'm going into my third year of Electrical Engineering. I'm super excited to be one of your Vice President Externals this year, and bring a diverse range of career oppurtunites for software and electrical engineering students! If you see me around don't hesitate to say hi (I love meeting new people :D).
      </ExecCard>


      <ExecCard
        imageSource={external}
        alt="external-headshot"
        name="Muhammad Rafiuzzaman" // Change name for new Exec
        councilPosition="Co-VP External"
        email="external@zooengg.ca"
      >
        Hey there! I'm Rafi, and I'm thrilled to take on the role of your Vice President External this year! As I gear up for my third year in electrical engineering, I'm eager to channel my passion and expertise into this exciting opportunity. At ZOO, I'm all about fostering meaningful connections and partnerships with external stakeholders. Whether it's collaborating with industry leaders, seeking out sponsorship opportunities, or representing our organization in the wider community, I'm dedicated to ensuring that our initiatives thrive and make a lasting impact.
      </ExecCard>

      <ExecCard
        imageSource={finance}
        alt="finance-headshot"
        name="Albert Tri" // Change name for new Exec
        councilPosition="Co-VP Finance"
        email="finance@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hello! My name is Albert, and I'm entering my third year of Electrical and Computer Engineering. I'm excited to take on the role of Vice President of Finance and look forward to this amazing opportunity to work with other team members this year. I will be working with the team to ensure that our finances run smoothly so that everyone can have the best experience possible. Feel free to reach out if you have any questions or concerns. See you around! 🙂
      </ExecCard>

      <ExecCard
        imageSource={finance2}
        alt="finance-headshot"
        name="Tanveer Parhar" // Change name for new Exec
        councilPosition="Co-VP Finance"
        email="finance@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hi! I'm Tanveer, a third-year in Electrical and Computer Engineering, and I'm psyched to be part of the Zoo Council as Co-VP Finance! I'm looking forward to supporting the rest of the VPs with their events this year, and getting us lots of money for community outreach! I also have a bit of a bouldering addiction, so there's a very good chance you'll see me at the UofC wall. Don't be shy to say hi and ask me any questions if you see me around, I'm always happy to meet new people!
      </ExecCard>


      <ExecCard
        imageSource={internal}
        alt="internal-headshot"
        name="Ravindith Singarachchige" // Change name for new Exec
        councilPosition="VP Internal"
        email="internal@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
        Hello everyone! My name is Ravindith, but feel free to call me Ravi. I'm excited to serve as your VP Internal. As a Software Engineering student entering my third year, I'm passionate about technology and building a strong community. My goal is to increase our outreach and social media presence, ensuring everyone stays engaged with zoo. Don't hesitate to stop me for a chat if you see me around; I'm always eager to meet new people and hear your ideas. Looking forward to an amazing year together!
      </ExecCard>
    </div>
  </div>
);

export default ExecPage;
