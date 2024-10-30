import "./Fcard.css";

const Fcard = () => {
  return (
    <div>
      <section className="the-card">
        <div className="card">
          <p>Order a Kuda card on the app with pickup and delivery options.</p>
        </div>
        <div className="card">
          <p>Enjoy cashless payment options online and offline.</p>
        </div>
        <div className="card">
          <p>Pay your essential bills and buy gift cards easily.</p>
        </div>
        <div className="card" style={{ marginLeft: "250px" }}>
          <p>Get 25 free transfers to Nigerian banks every month.</p>
        </div>
        <div className="card">
          <p>Save money automatically any time you spend.</p>
        </div>
      </section>
    </div>
  );
};

export default Fcard;
