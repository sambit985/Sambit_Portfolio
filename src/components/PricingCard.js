
import "./PricingCardStyle.css";
import React from 'react';
import { Link } from "react-router-dom";

const PricingCard = () => {
  return (
    <div className="pricing-card">
      <div className="pricing-card-header">
        <h2>Pricing</h2>
      </div>
      <div className="pricing-card-body">
        <div className="pricing-card-body-item">
          <div className="pricing-card-body-item-title">
            <h3>Basic</h3>
          </div>
          <div className="pricing-card-body-item-price">
            <h3>$199</h3>
          </div>
          <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </div>
        <div className="pricing-card-body-item">
          <div className="pricing-card-body-item-title">
            <h3>Premium</h3>
          </div>
          <div className="pricing-card-body-item-price">
            <h3>$299</h3>
          </div>
          <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </div>
        <div className="pricing-card-body-item">
          <div className="pricing-card-body-item-title">
            <h3>Standard</h3>
          </div>
          <div className="pricing-card-body-item-price">
            <h3>$399</h3>
          </div>
          <Link to="/contact" className="btn">PURCHASE NOW</Link>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
