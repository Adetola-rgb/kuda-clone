import image from "../Save/save.svg"
import "./Save.css"

const Save = () => {
  return (
    <div className="save">
        <div className="save-text">
        <h2>Save money as you spend it, seriously.</h2>
      <p>
        You can't avoid spending. That's how you pay for your needs. But we can
        help you put money away every time you pay for something. Just set a
        percentage to save and watch your money grow.
      </p>
      <p  style={{color: "rgb(64, 14, 111)"}}>See all our Savings</p>
        </div>

        <div>
            <img className="save-img" src={image} alt="" />
        </div>
    </div>
    
  );
};

export default Save;
