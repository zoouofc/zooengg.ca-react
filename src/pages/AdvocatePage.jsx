// Importing Components from node_modules
import React from 'react';

// Import Styling
import '../stylesheets/AdvocatePage.scss';

const AdvocatePage = () => (
  <div className="page--body advocate">
    <h2 className="page--title advocate">Academic Advocates</h2>
    <div className="page--description advocate">
      <p className="advocate-text">
        These software and electrical engineering Academic/Course Advocates are student volunteers associated with ZOO Council. Our aim is to provide an Advocate for every course, under the ESE and CPSC Department, that the members of ZOO are enrolled in.
      </p>
      <p className="advocate-text">
        Now, those taking up the responsibility of Advocates are assigned to courses they are <i>currently</i> enrolled in. Their responsibility is to ensure that the comments and concerns of students are given a voice that is heard. Therefore, if you are a student that has concerns about some aspect of a course you're enrolled in, reach out to the respective Academic Advocate for the respective course and raise their concerns!
      </p>

      <br />

      <h3 className="page-sub-title advocate">Supported Classes for Winter 2022</h3>
      <div class="table-container">

        <div>
          <h5>CPSC Courses</h5>
          <table class="advocate-table">
            {/* CPSC Courses */}
            <thead>
              <tr>
                <th>Course</th>
                <th>Advocate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CPSC 319</td>
                <td><a href="mailto:aleksander.berezowsk@ucalgary.ca">Aleks Berezowski</a> || (he/him)</td>
              </tr>
              <tr>
                <td>CPSC 457</td>
                <td><a href="mailto:risat.haque@ucalgary.ca">Risat Haque</a> || (he/him)</td>
              </tr>
              <tr>
                <td>CPSC 471</td>
                <td><a href="mailto:lauraine.baffot@ucalgary.ca">Lauraine Baffot</a> || (she/her)</td>
              </tr>
              <tr>
                <td>CPSC 559</td>
                <td><a href="mailto:evan.krul1@ucalgary.ca">Evan Krul</a> || (he/him)</td>
              </tr>
            </tbody>
          </table>

          {/* ENCM Courses */}
          <h5>ENCM Courses</h5>
          <table class="advocate-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Advocate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ENCM 369</td>
                <td><a href="mailto:rumaisashoeb.talukde@ucalgary.ca">Rumaisa Shoeb Talukder</a> || (she/her)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h5>ENEL Courses</h5>
          <table class="advocate-table">
            {/* ENEL Courses */}
            <thead>
              <tr>
                <th>Course</th>
                <th>Advocate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ENEL 300</td>
                <td><a href="mailto:benjamin.pele@ucalgary.ca">Ben Pele</a> || (he/him)</td>
              </tr>
              <tr>
                <td>ENEL 327</td>
                <td><a href="mailto:fanny.lo@ucalgary.ca">Fanny Lo</a> || (she/her)</td>
              </tr>
              <tr>
                <td>ENEL 343</td>
                <td><a href="mailto:yashpreet.singh@ucalgary.ca">Yashpreet Singh</a> || (he/him)</td>
              </tr>
              <tr>
                <td>ENEL 361</td>
                <td><a href="mailto:yashpreet.singh@ucalgary.ca">Yashpreet Singh</a> || (he/him)</td>
              </tr>
              <tr>
                <td>ENEL 400</td>
                <td><a href="mailto:marcelo.ligonzales@ucalgary.ca">Marcelo Li Gonzales</a> || (he/him)</td>
              </tr>
              <tr>
                <td>ENEL 441</td>
                <td><a href="mailto:rishabh.ruhela@ucalgary.ca">Rishabh Ruhela</a> || (he/him)</td>
              </tr>
              <tr>
                <td>ENEL 469</td>
                <td><a href="mailto:emily.knight2@ucalgary.ca">Emily Knight</a> || (she/they)</td>
              </tr>
              <tr>
                <td>ENEL 471</td>
                <td><a href="mailto:emily.knight2@ucalgary.ca">Emily Knight</a> || (she/they)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          {/* SENG Courses */}
          <h5>SENG Courses</h5>
          <table class="advocate-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Advocate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SENG 438</td>
                <td><a href="mailto:tyler.witzke@ucalgary.ca">Tyler Witzke</a> || (he/him)</td>
              </tr>
              <tr>
                <td>SENG 401</td>
                <td><a href="mailto:lauraine.baffot@ucalgary.ca">Lauraine Baffot</a> || (she/her)</td>
              </tr>
              <tr>
                <td>SENG 471</td>
                <td><a href="mailto:risat.haque@ucalgary.ca">Risat Haque</a> || (he/him)</td>
              </tr>
              <tr>
                <td>SENG 513</td>
                <td><a href="mailto:evan.krul1@ucalgary.ca">Evan Krul</a> || (he/him)</td>
              </tr>
              <tr>
                <td>SENG 533</td>
                <td><a href="mailto:evan.krul1@ucalgary.ca">Evan Krul</a> || (he/him)</td>
              </tr>
            </tbody>
          </table>

          {/* ENSF Courses */}
          <h5>ENSF Courses</h5>
          <table class="advocate-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Advocate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ENSF 311</td>
                <td><a href="mailto:benjamin.pele@ucalgary.ca">Ben Pele</a> || (he/him)</td>
              </tr>
              <tr>
                <td>ENSF 409</td>
                <td><a href="mailto:carter.drewes@ucalgary.ca">Carter Zimmer</a> || (they/them)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <hr />

      <h3><b>Frequently Asked Questions</b></h3>

      <p>
        When should I contact my course's Advocate?
        A course advocate can best help in situations where a large portion of the class is being negatively affected.
      </p><p>
        We encourage all students to voice their concerns to the instructor first, respectfully and professionally. Constructive feedback goes a long way!
      </p><p>
        If a student has contacted the instructor or does not feel comfortable contacting the instructor, they may reach out to the course advocate.
        What will a course advocate do?
        If a course advocate receives a complaint from a student, they will coordinate with the ZOO council and triage the complaint assigning a tier.
        Tier 1
        For minor complaints defined as tier 1, the course advocate may reach out to the instructor and pass on the feedback. If this does not resolve the issue or previous attempts have been unsuccessful, the course advocate will triage the complaint to tier 2.
        Tier 2
        For tier 2, the course advocate will work with the ZOO council and coordinate with the appropriate department to find and communicate a resolution.

      </p><p>

        What can a course advocate help me with?
        If you have any concerns, please do not hesitate to contact your course advocate; if the matter does not meet the criteria, the advocate will point you in the right direction.
      </p><p>

        Here are some examples the course advocate can assist with:
        Tier 1
        Minor course delivery concerns shared by a small-medium group of students
        Inconsistent or unfair grading affecting a portion of the class
        Instructor communication or reliability concerns
        Tier 2
        Major course delivery concerns shared by a large portion of students
        Major grading issues affecting the whole class
        Inappropriate or disrespectful behaviour from a staff member
      </p><p>

        Here are some examples the course advocate is NOT able to assist with:
        Grading issues affecting only you
        Group member conflicts
        Personal disagreements with instructors
      </p><p>

        Will I remain anonymous if I submit a claim to my class advocate?
        Absolutely!
        We will never disclose your information to either the instructor or department!
      </p><p>

        If there is an instance where it would be necessary to share your information, we will ask for your consent before doing so.
        What if I have concerns but don't want to use my course advocate?
        That is entirely okay! If you have concerns, you can always contact your instructor or the department directly.
        <br />
        <a href="https://schulich.ucalgary.ca/electrical-software/contacts">
          schulich.ucalgary.ca/electrical-software/contacts
        </a>
        <br />
        <a href="https://schulich.ucalgary.ca/electrical-software/contacts">
          science.ucalgary.ca/computer-science/contacts
        </a>
      </p>
    </div >
  </div >
)

export default AdvocatePage;
