import ViewAllIcon from "../modules/icons/viewall";
import "../style/catalouge.css";

const Catalouge = ({ Items}) => {
  return (
    <>
      {Items.map((item) => (
        <div key={item.id} className="catalouge-container">
          <div key={item.id} className="catalouge">
            <div key={item.id} className="description">
              <div className="left-description">
                <div className="item-count">
                  <div className="item-count-text">
                    <p>
                      <span>11+</span> items
                    </p>
                  </div>
                </div>
                <div className="description-text">
                  <h2>{item.name}</h2>
                  <ul className="items">
                    {Object.values(item.items).map((subItem, index) => (
                      <li key={index} className="item">
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="view-btn">
                  <a href={item.product_link} className="view">
                    View All<ViewAllIcon height={20} width={20}/>
                  </a>
                </div>
              </div>
              <div className="right-description">
                <img src={item.img_url} alt={item.name} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Catalouge;
