import "./HeroBackground.css";
const HeroBackground = ({ children }) => {
  return (
    <section className="hero-bg">
      <div className="hero-overlay"></div>
      <div className="hero-content-wrapper">{children}</div>
    </section>
  );
};

export default HeroBackground;