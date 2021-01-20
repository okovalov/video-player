import React from 'react';

const MainHeader: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="header-content-container">
            <div className="header-icon-container">
              <a href="/">
                <span className="icon-text">
                  <span className="icon has-text-gold">
                    <i className="fas fa-video fa-2x"></i>
                  </span>
                </span>
              </a>
            </div>
            <div className="header-title-container ">
              <span className="has-text-gold is-size-5 is-uppercase has-text-weight-bold">
                Awesome Video Player
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
