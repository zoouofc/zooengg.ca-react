// Importing Components from node_modules
import React from 'react';
import Faq from 'react-faq-component';

import data from '../components/FaqInfo';

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

      <h3 className="page-sub-title advocate">Supported Classes for Fall 2022</h3> {/* Update semester */}
      {/* Comment out following line when tables have content */}
      <p className='advocate-text' style={{textAlign: "center"}}>Please check back closer to the start of the Fall semester for an updated list of class advocates.</p>

      <div class="table-container">
        <div>
            {/* CPSC Courses */}
          {/* <h5>CPSC Courses</h5>
          <table class="advocate-table">
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
          </table> */}

          {/* ENCM Courses */}
          {/* <h5>ENCM Courses</h5>
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
          </table> */}
        </div>

        <div>
            {/* ENEL Courses */}
          {/* <h5>ENEL Courses</h5>
          <table class="advocate-table">
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
                <td><a href="mailto:emily.knight2@ucalgary.ca">Emily Knight</a> || (she/her)</td>
              </tr>
              <tr>
                <td>ENEL 471</td>
                <td><a href="mailto:emily.knight2@ucalgary.ca">Emily Knight</a> || (she/her)</td>
              </tr>
            </tbody>
          </table> */}
        </div>

        <div>
          {/* SENG Courses */}
          {/* <h5>SENG Courses</h5>
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
          </table> */}

          {/* ENSF Courses */}
          {/* <h5>ENSF Courses</h5>
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
          </table> */}
        </div>
      </div>

      <hr />

      <div className='faq-container'>
        <h3><b>Frequently Asked Questions</b></h3>
        <Faq data={data} />
      </div>
    </div >
  </div >
)

export default AdvocatePage;
