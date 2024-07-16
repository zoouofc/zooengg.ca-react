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
import external2 from "../assets/council/external2.png";
import finance from "../assets/council/finance.png";
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
      </ExecCard>

      <ExecCard
        imageSource={academic}
        alt="academic-headshot"
        name="Jun Chao" // Change name for new Exec
        councilPosition="VP Academic"
        email="academic@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={academic}
        alt="academic-headshot"
        name="Simon Xu" // Change name for new Exec
        councilPosition="VP Academic"
        email="academic@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={events}
        alt="events-headshot"
        name="Aaryan Deshpande" // Change name for new Exec
        councilPosition="VP Events"
        email="events@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={events}
        alt="events-headshot"
        name="Cody Diao" // Change name for new Exec
        councilPosition="VP Events"
        email="events@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={external2}
        alt="external-headshot"
        name="Arshiya Shaheen" // Change name for new Exec
        councilPosition="VP External"
        email="external@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>


      <ExecCard
        imageSource={external}
        alt="external-headshot"
        name="Muhammad Rafiuzzaman" // Change name for new Exec
        councilPosition="VP External"
        email="external@zooengg.ca"
      >
         Hey there! I'm Rafi, and I’m thrilled to take on the role of your Vice President External this year! As I gear up for my third year in electrical engineering, I'm eager to channel my passion and expertise into this exciting opportunity. At ZOO, I'm all about fostering meaningful connections and partnerships with external stakeholders. Whether it's collaborating with industry leaders, seeking out sponsorship opportunities, or representing our organization in the wider community, I'm dedicated to ensuring that our initiatives thrive and make a lasting impact.
      </ExecCard>

      <ExecCard
        imageSource={finance}
        alt="finance-headshot"
        name="Albert Tri" // Change name for new Exec
        councilPosition="VP Finance"
        email="finance@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>

      <ExecCard
        imageSource={finance}
        alt="finance-headshot"
        name="Tanveer Parhar" // Change name for new Exec
        councilPosition="VP Finance"
        email="finance@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>


      <ExecCard
        imageSource={internal}
        alt="internal-headshot"
        name="Ravindith Singarachchige" // Change name for new Exec
        councilPosition="VP Internal"
        email="internal@zooengg.ca"
      >
        {/* Bio -- Update for new Exec */}
      </ExecCard>
    </div>
  </div>
);

export default ExecPage;

// TODO: Update this file as required when new executives are elected

export const commInfo = [
  {
    execPosition: "President",
    execEmail: "president@zooengg.ca",
    execName: "Vacant",
    execBio: "???",
  },
  {
    execPosition: "VP Academic",
    execEmail: "academic@zooengg.ca",
    execName: "Vacant",
    execBio: "???",
  },
  {
    execPosition: "VP Events",
    execEmail: "events@zooengg.ca",
    execName: "Vacant",
    execBio: "???",
  },
  {
    execPosition: "VP External",
    execEmail: "external@zooengg.ca",
    execName: "Vacant",
    execBio: "???",
  },
  {
    execPosition: "VP Finance",
    execEmail: "finance@zooengg.ca",
    execName: "Vacant",
    execBio: "???",
  },
  {
    execPosition: "VP Internal",
    execEmail: "internal@zooengg.ca",
    execName: "Vacant",
    execBio: "???",
  },
];
