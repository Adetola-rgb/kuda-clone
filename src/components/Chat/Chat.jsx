import image from "../Chat/chat.svg";
import "./Chat.css";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-text">
        <h2>We're always happy to help you.</h2>
        <p>
          You can chat with us on the app, slide into our DMs, tweet, leave an
          Instagram comment, send an email or call. However you choose to reach
          out, there'll always be a friendly person there to make your life
          easy.
        </p>
        <p  style={{color: "rgb(64, 14, 111)"}}  >Get Help</p>
      </div>

      <div>
        <img src={image} alt="" className="chat-img" />
      </div>
    </div>
  );
};

export default Chat;
