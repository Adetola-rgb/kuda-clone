import image from "../Fees/fees.svg";
import "./Fees.css";

const Fees = () => {
  return (
    <div className="fees">
      <div>
        <img className="fees-img" src={image} alt="" />
      </div>

      <div className="fees-text">
        <h2>Fees as clear as glass.</h2>
        <p style={{ fontSize: "17px" }}>
          We're serious about free banking, and we will never, ever charge you
          for anything without your consent.
        </p>
        <p style={{ color: "rgb(64, 14, 111)" }}>See all our fees</p>
      </div>
    </div>
  );
};

export default Fees;
