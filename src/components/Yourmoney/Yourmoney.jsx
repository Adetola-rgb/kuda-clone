import Image from "../Yourmoney/yourmoney.svg";
import "./Yourmoney.css";

const YourMoney = () => {
  return (
    <div className="yourmoney">
      <div>
        <img className="yourmoney-img" src={Image} alt="" />
      </div>
      <div className="yourmoney-text">
        <h2>It's your money, we just help you manage it.</h2>
        <p>
          Save it, spend it, send it. It's up to you. Whatever you choose to do
          with your money, we'll make sure it's done better and free of charge.
          We take responsibility for that.
        </p>
      </div>
    </div>
  );
};

export default YourMoney;
