import "../sass/AboutPage.scss";
import {
  DigiButton,
  DigiTypographyHeadingJumbo,
} from "@digi/arbetsformedlingen-react";
import {
  ButtonSize,
  ButtonVariation,
  TypographyHeadingJumboLevel,
} from "@digi/arbetsformedlingen";
import { useNavigate } from "react-router-dom";

export const AboutPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="aboutPage">
      <DigiTypographyHeadingJumbo
        afText="Om Oss"
        afLevel={TypographyHeadingJumboLevel.H1}
      ></DigiTypographyHeadingJumbo>
      <section className="topSection">
        <div className="topContent">
          <h1>Om Vårt Projekt</h1>
          <p>
            Vi är en grupp studenter som har utvecklat en webbapplikation med
            React som efterliknar Arbetsförmedlingens officiella webbplats. Vårt
            mål var att skapa en realistisk och användarvänlig plattform för att
            lära oss mer om webbutveckling och React.
          </p>
        </div>
      </section>
      <section className="bottomSection">
        <div className="bottomContent">
          <h1>Hitta drömjobbet som tar din karriär till nästa nivå!</h1>
          <p>
            Utforska dina karriärmöjligheter med oss! Vi erbjuder ett brett
            utbud av spännande jobbmöjligheter som kan passa just dina
            färdigheter och intressen. Ta första steget mot din drömkarriär
            idag!
          </p>
          <DigiButton
            afSize={ButtonSize.LARGE}
            afVariation={ButtonVariation.PRIMARY}
            afFullWidth={false}
            onClick={handleButtonClick}
          >
            Sök jobb
          </DigiButton>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
