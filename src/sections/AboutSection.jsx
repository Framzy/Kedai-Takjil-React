const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen scroll-mt-16">
      <div className="about-small-container" id="section2">
        <h1 className="about-title">
          <div className="bounceInDown">Tentang Kami</div>
        </h1>
        <div className="about-row">
          <div className="about-kedai">
            <img
              src="/images/about/about-takjil.png"
              alt="about takjil"
              className="fadeInLeft"
            />
          </div>
          <div className="about-col-2">
            <div className="about-cloud">
              <img
                src="/images/about/about-cloud.png"
                alt="cloud"
                className="fadeInRight"
              />
            </div>
            <div className="about-information">
              <div className="fadeInRight">
                <h2>Kedai Takjil</h2>
                <p>
                  Kedai takjil merupakan tempat yang sangat pas
                  <br />
                  untuk anda yang kangen atau sedang ingin
                  <br />
                  merasakan minuman yang selalu hadir
                  <br />
                  pada bulan Ramadhan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
