import React from "react";
import featureData from "./data";
const Features = () => {
  return (
    <section className="feature-section">
      <article className="features-info">
        <h2 className="features-heading">What's different about Manage?</h2>
        <p className="paragraph">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </article>
      <div className="app-features">
        {featureData.map((feature) => (
          <div className="feature" key={feature.id}>
            <span className="feature-number">{feature.number}</span>
            <div className="feature-description">
              <h4 className="feature-title">{feature.featureTitle}</h4>
              <p className="paragraph">{feature.featureDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Features;
