import spinner from "../../assets/images/spinner.png";

const Spinner = () => {
  return (
    <div className="spinner">
      <img className="spinner__image" src={spinner} alt="loading" />
    </div>
  );
};

export default Spinner;
