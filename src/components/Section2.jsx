import "../styles/Section2.css";
import FeatureCards from "./FeatureCards";
import card2 from "../Image/MUtZH5.jpg";
import card3 from "../Image/R.jpg";
const Section2 = () => {
  return (
    <div className="Section2">
      <div className="cards-container">
        <FeatureCards
          img={
            "https://th.bing.com/th/id/OIP.NWD-OLaRXzit2x_OG0L1cgHaJm?w=216&h=195&c=7&r=0&o=5&pid=1.7"
          }
        />
        <FeatureCards img={card2} />
        <FeatureCards img={card3} />
      </div>
      <div className="section2-background">
        <img src="/train.png" alt="" />
      </div>
    </div>
  );
};

export default Section2;
