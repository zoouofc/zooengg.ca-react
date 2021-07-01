// Importing Components from node_modules
import React from 'react';
import Flickity from 'react-flickity-component';

// Import project-defined components
import { EventCardRight, EventCardLeft } from '../components/EventCard';
import EventPosters from '../components/EventPosters';

// Import Styling
import '../stylesheets/event/EventPage.scss';

// Importing Images
import cusec from '../assets/event-page/cusec.svg';
import enggWeek from '../assets/event-page/engg-week.svg';
import internship from '../assets/event-page/internship-panel.svg';
import lan from '../assets/event-page/lan-party.svg';
import speakers from '../assets/event-page/speaker-session.svg';
import techElec from '../assets/event-page/tech-elec-night.svg';
import techWorkshops from '../assets/event-page/technical-workshop.svg';
import techFair from '../assets/event-page/technology-fair.svg';

// Image carousel settings
const flickityOptions = {
  imagesLoaded: true,
  wrapAround: true,
  autoPlay: 3000,
  resize: true,
  pageDots: false,
};

const EventPage = () => (
  <div className="page--body events">
    <h2 className="page--title events">Our Major Events</h2>
    <div className="page--description events">
      This year the Society is working harder than ever before to bring new events,
      along with some other classics, to the student population.
      <p>
        Please note that the list below is not exhaustive! More events may be revealed
        later in the year via our social media, so be sure to check those often.
      </p>
    </div>

    <div id="event-grid">
      <EventCardLeft
        imageSource={techFair}
        alt="technology fair visual"
        eventName="Technology Fair"
      >
        Thinking about where to apply for internship or after graduation? A Technology
        (and/or Career) Fair is a perfect opportunity to learn what is available and
        make some valuable connections that can help you in the future while looking
        for employment. Be prepared with your resume and proper attire as you never know
        what may come from your interactions with the various employeers and recruiters!
      </EventCardLeft>

      <EventCardRight
        imageSource={internship}
        alt="internship panel visual"
        eventName="Internship Panels"
      >
        Nervous about internship? Unsure what to expect during those next 12-16 months?
        ZOO is providing an opportunity to put your mind at ease with our Internship Panel!
        Hear from various interns, past and present, on topics ranging from the struggles
        of the application phase to how to succeed in your workplace.
      </EventCardRight>

      <EventCardLeft
        imageSource={speakers}
        alt="speaker session visual"
        eventName="Speaker Sessions"
      >
        These Speaker Sessions are an opportunity to hear from members of industry on
        various electrical, computer, and software engineering topics. If you&#39;re unsure
        as to what field you plan to pursue upon graduating for your degree, this is a
        chance to narrow down your interests! The Speaker Sessions can also provide some
        insight as to the steps you need to take to be successful in a particular field,
        diversity in the workplace and long-term career goals.
        <br />
        <br />
        If you&#39;re interested in running a session for or with ZOO,
        please contact our VP External at
        {' '}
        <a href="external@zooengg.ca">
          external@zooengg.ca
        </a>
      </EventCardLeft>

      <EventCardRight
        imageSource={techWorkshops}
        alt="Technical Workshops visual"
        eventName="Technical Workshops"
      >
        Curious about PCB Design? Wanting to get into Web Development? Can&#39;t figure out
        how to use a breadboard? These Technical Workshops are meant to address such
        topics. It provides students with the ability to learn the fundamentals of
        computer, software, and electrical engineering concepts outside the classroom.
        Students are provided with help as needed, to make sure that they feel successful
        in any tasks they are assigned.
        <br />
        <br />
        If you&#39;re interested in running a workshop for or with ZOO,
        please contact our VP Academic at
        {' '}
        <a href="external@zooengg.ca">
          academic@zooengg.ca
        </a>
      </EventCardRight>

      <EventCardLeft
        imageSource={cusec}
        alt="cusec visual"
        eventName="Canadian University Software Engineering Conference"
      >
        ZOO works to coordinate an annual trip to the Canadian University
        Software Engineering Conference in Montreal. for those unaware
        CUSEC, as described by their site, is:
        <br />
        <br />
        <em>
          [...] an annual software engineering conference organized for
          students by students. It was founded in 2002 by a small team
          of tech enthusiasts on a mission to educate and expose students
          to a diverse range of areas in software engineering and computer science.
          The conference enables attendees to discover knowledgeable speakers,
          connect with sponsoring companies, and make lifelong friends, all
          in a safe and comfortable space.
        </em>
        <br />
        <br />
        Please be aware that CUSEC 2022 may be held online due to COVID-19.
      </EventCardLeft>

      <EventCardRight
        imageSource={techElec}
        alt="tech elec night visual"
        eventName="Technical Elective Night"
      >
        Tech Elec Night is an opportunity for students to learn about the elective courses available
        during the next school year. Attend the event to hear from the professors about the content
        you will see and the sort of coursework to expect.
        <br />
        <br />
        Doubts about enrolling in a course? Well, this is the perfect opportunity to ask any
        question on your mind before you potentially find yourself regretting your course choice.
      </EventCardRight>

      <EventCardLeft
        imageSource={lan}
        alt="lan party visual"
        eventName="LAN Parties"
      >
        LAN Parties are a favourite amongst students in the Department. Mental health is important
        and this event serves an opportunity for students to relax for a night of games during the
        typically hectic midterm season. Come out and form new friendships with people in all
        years over a game of Super Smash Bros. and more!
      </EventCardLeft>

      <EventCardRight
        imageSource={enggWeek}
        alt="Engg Week visual"
        eventName="Engg Week"
      >
        There is no other event like Engg Week where are you able to feel the
        same level of commradery throughout ESE. During the first week of the
        Winter semester, be sure to join ZOO in a battle against all the other
        Departments to prove that Electrical and Software Engineering Students
        are the best! Our most recent win has been in the 2020-2021 school year.
        <br />
        <br />
        There will be parades, scavenger hunts, movie nights, Key Clue, and more!
        We highly recommend attending this event at least once in your degree as
        its filled with fun, challenges, and friends.
      </EventCardRight>
    </div>

    <hr
      style={{
        margin: '0 auto',
        width: '75%',
      }}
    />

    <div className="past-event--container">
      <h2 className="page--title past-events">Our Past Events</h2>
      <div className="page--description past-events">
        Every year is run a little bit different, as such, we wanted to provide people with
        this archive of all events, and activities ran or participated by ZOO in the past
        few years.
      </div>

      <div className="carousel-container">
        <Flickity
          className="carousel" // default ''
          elementType="div" // default 'div'
          options={flickityOptions} // takes flickity options {}
        >
          <EventPosters />
        </Flickity>
      </div>
    </div>
  </div>
);

export default EventPage;
