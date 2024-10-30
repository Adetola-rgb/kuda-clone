import image from "../Openacct/openacct.svg"
import "./Openacct.css";

const OpenAcct = ()=>{
    return(
        <div className="account">
             <div className="openacct-text">
             <h2>Your phone +
our app + <br />
a debit card =
a simpler life.</h2>
<p>We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves.</p>
<h4>Open An Account in Minutes</h4>
             </div> 
             <div >
              <img className="openacct-img" src={image} alt="" />
             </div>
        </div>
    )
}

export default OpenAcct