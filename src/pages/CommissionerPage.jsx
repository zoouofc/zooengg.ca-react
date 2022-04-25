// Importing Components from node_modules
import React from 'react';
import { Link } from 'react-router-dom';

// Import project-defined components
import CommCard from '../components/CommCard';

// Import Styling
import '../stylesheets/commissioner/CommissionerPage.scss';

const CommissionerPage = () => (
  <div className="page--body commissioner">
    {/* Change for new school year */}
    <h2 className="page--title commissioner">ZOO Commissioners: 2022 - 2023</h2>

    <p className="page--description commissioner">
      The work we do would not be possible without the help of our many commissioners.
      The following are all the Society&#39;s current Commissioner positions,
      and those taking on the responsibilities for the school year!
      <br />
      <br />
      If you&#39;re interested, click the button to learn how to apply.
    </p>

    <div className="btn--dark">
      <Link
        to="/join-the-team"
        className="button"
      >
        Join the Team!
      </Link>
    </div>

    <div id="profile-grid">
      <CommCard
        commRole="1st/2nd/3rd/4th+ Year, Internship, and Alumni Representative:"
        names={[
          "Marcelo Li Gonzales (Internship)",
          "Parker Link (4yr+ ENEL)",
          "Ines Rosito (Alumni)"
        ]}
      >
        Reps act as a bridge between the Society and its members,
        announcing major Society events to peers in your year.
      </CommCard>

      <CommCard
        commRole="Academic Events Commissioner:"
        names={[]}
      >
        In this role, you will coordinate with VP Academic and Events
        to plan and host various academic-oriented events.
      </CommCard>

      <CommCard
        commRole="Artistic Commissioner:"
        names={[]}
      >
        In this role, you will be responsible for creating, distributing,
        and promoting posters for various Society events.
      </CommCard>

      <CommCard
        commRole="ENGG/Frosh Week Director:"
        names={[]}
      >
        In this role, you will direct the Society&#39;s involvement in
        Frosh and ENGG week. Includes recruiting, participation, etc.
      </CommCard>

      <CommCard
        commRole="Operations Commissioner:"
        names={[]}
      >
        In this role, you will assist VP External and Internal with
        their duties of inter- and intra-Society communication.
      </CommCard>

      <CommCard
        commRole="Professional Development Commissioner:"
        names={[]}
      >
        In this role, you will coordinate with VP External and
        Events to plan and host various professional development events.
      </CommCard>

      <CommCard
        commRole="Social Events Commissioner:"
        names={[]}
      >
        In this role, you will coordinate with VP Events to plan
        and host various social-oriented events.
      </CommCard>

      <CommCard
        commRole="Sponsorship Commissioner:"
        names={[]}
      >
        In this role, you will coordinate with VP Finance to ensure
        that the financial needs of the Society are met by securing
        sponsorships. You will be reaching out to companies and
        sharing our sponsorship package, which you will help update.
      </CommCard>

      <CommCard
        commRole="Webmaster:"
        names={["Ines Rosito"]}
      >
        As Webmaster, you are the core individual responsible for
        maintaining all the Society&#39;s technologies, which
        include a website, webserver, fileserver, Council emails, and more.
      </CommCard>
    </div>
  </div>
);

export default CommissionerPage;
