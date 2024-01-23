// Importing Components from node_modules
import React from "react";

// Importing impages
import cutco from "../assets/NotCutcoScreenShot.png";

// This page is an easter egg to the 2022 ZOO ENGG Week Movie: Codebusters
const CutcoPage = () => (
  <div className="page--body">
    <img src={cutco} className="cutco" alt="cutco" />
  </div>
);

export default CutcoPage;
