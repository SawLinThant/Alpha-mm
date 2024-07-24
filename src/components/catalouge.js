import "../style/catalouge.css";

const Catalouge = ({ Items }) => {
  return (
    <div className="catalouge">
      <div className="description">
        <div className="left-description">
          <div className="item-count">
            <div className="item-count-text">
              <p>
                <span>11+</span> items
              </p>
            </div>
          </div>
          <div className="description-text">
            <h2>Kitchen</h2>
            <ul className="items">
              {Items.map((item) => (
                <li key={item.id} className="item">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="view-btn">
            <a href="/" className="view">
              View All
            </a>
          </div>
        </div>
        <div className="right-description"></div>
      </div>
    </div>
  );
};

export default Catalouge;
