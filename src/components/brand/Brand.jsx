import React from "react";
import { atlassian, dropbox, google, shopify, slack } from "./import";
import "./brand.css";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding" id="brand">
      <div>
        <img src={atlassian} alt="Atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="Atlassian" />
      </div>
      <div>
        <img src={google} alt="Atlassian" />
      </div>
      <div>
        <img src={shopify} alt="Atlassian" />
      </div>
      <div>
        <img src={slack} alt="Atlassian" />
      </div>
    </div>
  );
};

export default Brand;
