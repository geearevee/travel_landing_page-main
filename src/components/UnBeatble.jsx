import "../styles/section3.css";
import "../styles/UnBeatable.css";
const UnBeatable = () => {
  return (
    <div className="Section3 UnBeatable">
      <div className="left">
        <div className="innerSectionNumber">04.</div>
        <div className="innerSectionContent">
          <div className="section-title-destination">
            <p>Journey that cant be beat</p>
            {/* <p className="shadow-text">Journey that cant be beat</p> */}
          </div>
          <div className="options">
            <img src="" alt="" className="bookmark" />
            <button className="know-more">KNOW MORE</button>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXA2am4zZnIwMzJxY3I5am5vcWFqc2ZxNnE5YjJxZXBrN3E1dHd2ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41lLNLM8BlXBWHio/giphy.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default UnBeatable;
