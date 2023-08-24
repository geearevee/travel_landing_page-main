const FeatureCards = ({ img }) => {
  //   const {
  //     title,
  //     description,
  //     image
  //   } = cardData;
  return (
    <div className="FeatureCards">
      <div className="featureCards-image-container">
        <img src={img} alt="sdsd" />
      </div>
      <h2 className="title">UNIQUE TOURS</h2>
      <div className="card-divider"></div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id magnam
        cupiditate quas temporibus, eius sed neque!
      </p>
    </div>
  );
};

export default FeatureCards;
