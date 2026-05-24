function HeroSection() {
  return (
    <section id="hero" className="min-h-screen scroll-mt-16">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <div className="fadeInUp">
              <h2>Kedai Takjil</h2>
              <h1>Aneka Es Takjil!</h1>
              <p>
                Setelah kamu menahan haus dan lapar seharian,
                <br />
                tenggorokanmu pasti ingin merasakan
                <br />
                kesegaran yang menyegarkan.
              </p>
              <a href="#section2" className="btn_link" id="product-move">
                Order Sekarang &#8594;
              </a>
            </div>
          </div>
          <div className="orang">
            <img
              src="/images/home/orang.png"
              alt="orang"
              className="fadeInUp"
            />
          </div>
          <div className="awan">
            <img src="/images/home/cloud_homepage.png" alt="cloud" />
          </div>
          <div className="lentera">
            <img
              src="/images/home/lampu.png"
              alt="lampu"
              className="bounceInDown"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
