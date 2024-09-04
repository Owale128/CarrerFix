import SpinnerGif from "../assets/balls.gif";
import "../sass/spinner.scss"

export const Spinner = () => {
  return (
    <div className="spinnerContainer">
      <img src={SpinnerGif} alt="Loading..." className="spinnerImage" />
      <h2>Laddar Data...</h2>
    </div>
  );
};

