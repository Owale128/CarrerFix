import spinnerGif from "../assets/balls.gif";
import spinner from "../sass/spinner.scss";

const Spinner = () => {
  return (
    <div className="spinnerContainer">
      <img src={spinnerGif} alt="Loading..." className="spinnerImage" />
      <h2>Laddar Data...</h2>
    </div>
  );
};

