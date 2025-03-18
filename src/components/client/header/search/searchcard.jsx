import { data } from "../../data/data";
import { starIcons, cartBlackIcon } from "../../svg/paths";
export default function SearchCard({ onClose }) {
  function handleModalClose(e) {
    e.stopPropagation();
    if (e.target.classList.contains("search-modal")) {
      onClose(false);
      document.body.classList.remove("no-scroll");
    }
  }
  return (
    <div className="search-modal" onClick={handleModalClose}>
      <div className="search-modal-content flex-box-col g20">
        <input type="text" placeholder="Enter Product Name" />
        {data.map((search) => (
          <div
            key={search.id}
            className="flex-box-row sp-between align-center pr10 pl10 bottom pb10"
          >
            <div className="flex-box-row align-center">
              <div>
                <img
                  src={search.img}
                  alt="Search Image"
                  className="sq-img mr20"
                />
              </div>
              <div>
                <p className="mt0 mb0 client-title">{search.name}</p>
                <p className="mt5 mb0 client-price-text">{search.price}</p>
                <div className="mt5">{starIcons}</div>
              </div>
            </div>
            <div className="pointer">{cartBlackIcon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
