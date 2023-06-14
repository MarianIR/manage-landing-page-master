import illustrationIntro from "/src/images/illustration-intro.svg";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <article className="hero-article">
          <h1 className="hero-heading">
            Being everyone together to build better products
          </h1>
          <p className="paragraph">
            Manage makes it simple for softuware teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="get-started-btn">Get Started</button>
        </article>

        <img
          src={illustrationIntro}
          alt="hero illustration"
          width={200}
          className="illustration"
        />
      </section>
    </>
  );
};
export default Hero;
