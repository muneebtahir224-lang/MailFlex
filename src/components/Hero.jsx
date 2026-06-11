import banner from "../assets/banner.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">


        <div className="hero-right">
          <img
            src={banner}
            alt="AI Email Assistant"
          />
        </div>


        <div className="hero-left">
<center>
          <div className="badge">
            AI Powered Platform
          </div>

          <h1>
            Smart Email Classification,
            Summarization & Auto Reply
          </h1>

          <p>
            Analyze emails, detect intent,
            identify priority and generate
            intelligent responses instantly.
          </p>
</center>
        </div>


      </div>

    </section>
  );
}

export default Hero;