import Flag from "../assets/kudaflag.jpeg";
import "./Navbar.css";
import Drop from "../assets/dropdown.png";

const Navbar = () => {
  return (
    <div className="navigation">
      <section className="nav-one">
        <h1 className="kuda">Kuda.</h1>
        <ul className="list">
          <li>
            Personal <img className="dropdown" src={Drop} />{" "}
          </li>
          <li>
            Business <img className="dropdown" src={Drop} />
          </li>
          <li>
            Company <img className="dropdown" src={Drop} />
          </li>
          <li>
            Help <img className="dropdown" src={Drop} />
          </li>
        </ul>
      </section>

      <section className="nav-two">
        <p>Sign in</p>
        <button>join Kuda</button>
        <img className="k-flag" src={Flag} alt="" />
      </section>
    </div>
  );
};

export default Navbar;
