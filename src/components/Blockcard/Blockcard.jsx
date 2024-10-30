import image from "../Blockcard/blockcard.svg";
import "./Blockcard.css"

const Block = () => {
  return (
    <div className="block">
      <div>
        <img className="block-img" src={image} alt="" />
      </div>
      <div className="block-text">
        <h2>Turn off access, turn on safety.</h2>
        <p>
          Life happens. Milk spills. Debit cards go missing. If that ever
          happens, you can block your missing card on the app so no one can use
          it. We'd like to see them try.
        </p>
        <p style={{color: "rgb(64, 14, 111)"}} >Learn more about Cards</p>
      </div>
    </div>
  );
};

export default Block;
