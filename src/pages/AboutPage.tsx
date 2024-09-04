import RetroWave from "../assets/retro.png";

export const AboutPage = () => {
  return (
    <div style={{ height: "54vh" }}>
      <img src={RetroWave} alt="About Us" className="aboutUsImage"/>
      <h1>Om Vårt Projekt</h1>
      <p>
        Vi är en grupp studenter som har utvecklat en webbapplikation med React
        som efterliknar Arbetsförmedlingens officiella webbplats. Vårt mål var
        att skapa en realistisk och användarvänlig plattform för att lära oss
        mer om webbutveckling och React.
      </p>
      <p>
        Vi har designat en layout som återskapar Arbetsförmedlingens design,
        implementerat funktioner som sökfunktioner och formulär, samt testat
        och förbättrat allt för att säkerställa att det fungerar som det ska.
      </p>
    </div>
  );
};

export default AboutPage;
