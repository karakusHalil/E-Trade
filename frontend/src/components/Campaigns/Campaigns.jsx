import React from "react";
import CampaignsItem from "./CampaignsItem";
import "./Campaigns.css";

const Campaigns = () => {
  return (
    <>
      <section className="campaigns">
        <div className="container">
          <div className="campaigns-wrapper">
            <CampaignsItem />
            <CampaignsItem />
          </div>
          <div className="campaigns-wrapper">
            <CampaignsItem />
            <div className="campaign-item">
              <h3 className="campaign-title">
                Fashion Month <br />
                Ready in Capital <br />
                Shop
              </h3>
              <p className="campaign-desc">
                Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
              </p>
              <a href="#" className="btn btn-primary">
                View All
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Campaigns;
