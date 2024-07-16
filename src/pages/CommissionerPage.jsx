// Importing Components from node_modules
import React from "react";
import { Link } from "react-router-dom";

// Import project-defined components
import CommCard from "../components/CommCard";

// Import Styling
import "../stylesheets/commissioner/CommissionerPage.scss";

const CommissionerPage = () => (
  <div className="page--body commissioner">
    {/* Change for new school year */}
    <h2 className="page--title commissioner">ZOO Commissioners: 2024 - 2025</h2>

    <p className="page--description commissioner">
      The work we do would not be possible without the help of our many
      commissioners. The following are all the Society&#39;s current
      Commissioner positions, and those taking on the responsibilities for the
      school year!
      <br />
      <br />
      If you&#39;re interested, click the button to learn how to apply.
    </p>

    <div className="btn--dark">
      <Link to="/join-the-team" className="button">
        Join the Team!
      </Link>
    </div>

    <div id="profile-grid">
      <CommCard commRole="Academic Events Commissioner(s):" names={[]}>
        In this role, you will coordinate with VP Academic to plan and host
        various academic-oriented events.
      </CommCard>

      <CommCard
        commRole="Artistic Commissioner(s):"
        names={[]}
      >
        In this role, you will be responsible for creating various media for
        Society events & merchandise.
      </CommCard>

      <CommCard commRole="ENGG/Frosh Week Director(s):" names={[]}>
        In this role, you will direct the Society&#39;s involvement in Frosh and
        ENGG week. Includes recruiting, participation, etc.
      </CommCard>

      <CommCard
        commRole="Marketing Commissioner(s):"
        names={[]}
      >
        In this role, you will assist the VP Internal with their duties of
        inter- and intra-society communication
      </CommCard>

      <CommCard commRole="Social Events Commissioner(s):" names={[]}>
        In this role, you will coordinate with VP Events to plan and host
        various social-oriented events.
      </CommCard>

      <CommCard
        commRole="Sponsorship Commissioner(s):"
        names={["Maheen Raza", "Marya Rachdi"]}
      >
        In this role, you will coordinate with VP External & Finance to ensure
        that the financial needs of the Society are met by securing
        sponsorships.
      </CommCard>

      <CommCard commRole="Trip Director(s):" names={[]}>
        In this role, you will be responsible for assisting in the planning of
        various trips for the Society. Includes Silicon Valley Trip, CUSEC, etc.
      </CommCard>

      <CommCard
        commRole="Webmaster(s):"
        names={["Ines Rosito"]}
      >
        As Webmaster, you are the core individual responsible for maintaining
        all the Society&#39;s technologies, which include a website, webserver,
        fileserver, Council emails, and more.
      </CommCard>

      <CommCard
        commRole="ZOO Representative(s):"
        names={[
          "Cody Diao (2nd Year)",
          "Gregory Marr (2nd Year)",
          "Simon Xu (2nd Year)",
          "Yashpreet Singh (Internship)",
        ]}
      >
        Reps act as a bridge between the Society and its members, announcing
        major Society events to peers in your year.
      </CommCard>

      <CommCard commRole="Alumni Representative(s):" names={["Ines Rosito"]}>
        Reps act as a bridge between the Society and alumni. Allowing for the
        opportunity for Alumni to assist in events like Internship Panels, Tech
        Fair, Engg Week, etc.
      </CommCard>
    </div>
  </div>
);

export default CommissionerPage;
