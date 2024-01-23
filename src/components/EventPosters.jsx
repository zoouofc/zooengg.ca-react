/*
 * A file specifically meant to upload posters so that EventPage.jsx doesn't
 * seem so overly cluttered.
 *
 * Please note the format of the carousel:
 * The most recent school year is to appear first, and the posters within that school
 * year are shown in reverse chronological order (April to September)
 */

// Importing Components from node_modules
import React from "react";

// Importing Posters
// 2022-2023 School Year
import pic81 from "../assets/posters/2023-csgo.png";
import pic80 from "../assets/posters/2023-techElecNight.png";
import pic79 from "../assets/posters/2023-megaKegger.png";
import pic78 from "../assets/posters/2023-AGM.png";
import pic77 from "../assets/posters/2023-peerListening.png";
import pic76 from "../assets/posters/2023-lanWinter.png";
import pic75 from "../assets/posters/2023-enggWeek.png";
import pic74 from "../assets/posters/2022-sparkAfterDark.png";
import pic73 from "../assets/posters/2022-christmasParty.png";
import pic72 from "../assets/posters/2022-toyDrive.png";
import pic71 from "../assets/posters/2022-researchMixer.png";
import pic70 from "../assets/posters/2022-movieNight.png";
import pic69 from "../assets/posters/2022-halloween.png";
import pic68 from "../assets/posters/2022-pubTriviaFall.png";
import pic67 from "../assets/posters/2022-afternoonSocial.png";
import pic66 from "../assets/posters/2022-hoodie.png";
import pic65 from "../assets/posters/2022-techFair.png";
import pic64 from "../assets/posters/2022-internshipPanel.png";
import pic63 from "../assets/posters/2022-froshGamesNight.png";
import pic62 from "../assets/posters/2022-froshSports.png";

// 2021-2022 School Year
import pic61 from "../assets/posters/2022-pubTriviaWinter.png";
import pic60 from "../assets/posters/2022-AGM.png";
import pic59 from "../assets/posters/2022-improvingEvent.png";
import pic58 from "../assets/posters/2022-stellaralgoEvent.png";
import pic57 from "../assets/posters/2022-aimsioEvent.png";
import pic56 from "../assets/posters/2022-techElecNight.png";
import pic55 from "../assets/posters/2022-enggWeek.png.png";
import pic54 from "../assets/posters/2022-keyClue.png";
import pic53 from "../assets/posters/2021dec-studyUnderStars.png";
import pic52 from "../assets/posters/2021-patches.png";
import pic51 from "../assets/posters/2021-lanFall.png";
import pic50 from "../assets/posters/2021-hoodie.png";
import pic49 from "../assets/posters/2021-halloween.png";
import pic48 from "../assets/posters/2021-studyUnderStars.png";
import pic47 from "../assets/posters/2021-artNight.png";
import pic46 from "../assets/posters/2021-techFair.png";
import pic45 from "../assets/posters/2021-byElection.png";
import pic44 from "../assets/posters/2021-virtualGameNight.png";

// 2020-2021 School Year
import pic43 from "../assets/posters/2021-internshipPanel.png";
import pic42 from "../assets/posters/2021-lanWinter.png";
import pic41 from "../assets/posters/2021-AGM.png";
import pic40 from "../assets/posters/2021-gameJam.png";
import pic39 from "../assets/posters/2021-techElecNight.png";
import pic38 from "../assets/posters/2021-codeInTheDark.png";
import pic37 from "../assets/posters/2021-ZOOvieFebruary.png";
import pic36 from "../assets/posters/2021-CSUSvZOO.png";
import pic35 from "../assets/posters/2020-enggWeekRecruitment.png";
import pic34 from "../assets/posters/2020-keyClueRecruitment.png";
import pic33 from "../assets/posters/2021-cusec.png";
import pic32 from "../assets/posters/2020-lanFall.png";
import pic31 from "../assets/posters/2020-hoodie.png";
import pic30 from "../assets/posters/2020-ZoovieNovember.png";
import pic29 from "../assets/posters/2020-HYL.png";
import pic28 from "../assets/posters/2020-AGM&Meet.png";
import pic27 from "../assets/posters/2020-virtualGameNight.png";

// 2019-2020 School Year
import pic26 from "../assets/posters/2020-techElecNight.png";
import pic25 from "../assets/posters/2019-keyClueRecruit-2.png";
import pic24 from "../assets/posters/2019-keyClueRecruit-1.png";
import pic23 from "../assets/posters/2019-lanFall.png";
import pic22 from "../assets/posters/2019-hoodie.png";

// 2018-2019 School Year
import pic21 from "../assets/posters/2019-lanWinter.png";
import pic20 from "../assets/posters/2019-agm.png";
import pic19 from "../assets/posters/2019-techElecNight.png";
import pic18 from "../assets/posters/2019-movieNight.png";
import pic17 from "../assets/posters/2019-skiTrip.png";
import pic16 from "../assets/posters/2018-foodDrive.png";
import pic15 from "../assets/posters/2018-movieNight.png";
import pic14 from "../assets/posters/2018-lanFall.png";
import pic13 from "../assets/posters/2018-byElection.png";
import pic12 from "../assets/posters/2018-hoodie.png";

// 2017-2018 School Year
import pic11 from "../assets/posters/2018-lanWinter.png";
import pic10 from "../assets/posters/2018-techElecNight.png";
import pic9 from "../assets/posters/2017-lanFall.png";

// 2016-2017 School Year
import pic8 from "../assets/posters/2017-techElecNight.png";
import pic7 from "../assets/posters/2017-lanWinter.png";
import pic6 from "../assets/posters/2016-ranchmans.png";
import pic5 from "../assets/posters/2016-collabStudyNight.png";
import pic4 from "../assets/posters/2016-googleSocial.png";

// 2015-2016 School Year
import pic3 from "../assets/posters/2016-lanWinter.png";
import pic2 from "../assets/posters/2016-techElecNight.png";
import pic1 from "../assets/posters/2016-profMixer.png";

const EventPosters = () => (
  <>
    {/* Add new images at the top here V */}
    <img src={pic81} alt="" />
    <img src={pic80} alt="" />
    <img src={pic79} alt="" />
    <img src={pic78} alt="" />
    <img src={pic77} alt="" />
    <img src={pic76} alt="" />
    <img src={pic75} alt="" />
    <img src={pic74} alt="" />
    <img src={pic73} alt="" />
    <img src={pic72} alt="" />
    <img src={pic71} alt="" />
    <img src={pic70} alt="" />
    <img src={pic69} alt="" />
    <img src={pic68} alt="" />
    <img src={pic67} alt="" />
    <img src={pic66} alt="" />
    <img src={pic65} alt="" />
    <img src={pic64} alt="" />
    <img src={pic63} alt="" />
    <img src={pic62} alt="" />
    <img src={pic61} alt="" />
    <img src={pic60} alt="" />
    <img src={pic59} alt="" />
    <img src={pic58} alt="" />
    <img src={pic57} alt="" />
    <img src={pic56} alt="" />
    <img src={pic55} alt="" />
    <img src={pic54} alt="" />
    <img src={pic53} alt="" />
    <img src={pic52} alt="" />
    <img src={pic51} alt="" />
    <img src={pic50} alt="" />
    <img src={pic49} alt="" />
    <img src={pic48} alt="" />
    <img src={pic47} alt="" />
    <img src={pic46} alt="" />
    <img src={pic45} alt="" />
    <img src={pic44} alt="" />
    <img src={pic43} alt="" />
    <img src={pic42} alt="" />
    <img src={pic41} alt="" />
    <img src={pic40} alt="" />
    <img src={pic39} alt="" />
    <img src={pic38} alt="" />
    <img src={pic37} alt="" />
    <img src={pic36} alt="" />
    <img src={pic35} alt="" />
    <img src={pic34} alt="" />
    <img src={pic33} alt="" />
    <img src={pic32} alt="" />
    <img src={pic31} alt="" />
    <img src={pic30} alt="" />
    <img src={pic29} alt="" />
    <img src={pic28} alt="" />
    <img src={pic27} alt="" />
    <img src={pic26} alt="" />
    <img src={pic25} alt="" />
    <img src={pic24} alt="" />
    <img src={pic23} alt="" />
    <img src={pic22} alt="" />
    <img src={pic21} alt="" />
    <img src={pic20} alt="" />
    <img src={pic19} alt="" />
    <img src={pic18} alt="" />
    <img src={pic17} alt="" />
    <img src={pic16} alt="" />
    <img src={pic15} alt="" />
    <img src={pic14} alt="" />
    <img src={pic13} alt="" />
    <img src={pic12} alt="" />
    <img src={pic11} alt="" />
    <img src={pic10} alt="" />
    <img src={pic9} alt="" />
    <img src={pic8} alt="" />
    <img src={pic7} alt="" />
    <img src={pic6} alt="" />
    <img src={pic5} alt="" />
    <img src={pic4} alt="" />
    <img src={pic3} alt="" />
    <img src={pic2} alt="" />
    <img src={pic1} alt="" />
  </>
);

export default EventPosters;
