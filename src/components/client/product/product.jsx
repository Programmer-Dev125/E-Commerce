import { useRef } from "react";
import { leftArrow, rightArrow } from "./svg/paths";

export default function Product() {
  const isRef = useRef(null);

  function handleRight() {
    if (isRef) {
      isRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  }
  function handleLeft() {
    if (isRef) {
      isRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  }
  return (
    <div>
      <p className="section-title mb50">Products</p>
      <div className="product-carousel">
        <svg
          width="20"
          onClick={handleLeft}
          height="20"
          viewBox="0 0 20 20"
          className="left"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={leftArrow} fill="white" />
        </svg>
        <div className="product-carousel-child" ref={isRef}>
          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>

          <div>
            <img src="./assets/content-photo.png" alt="Content Image" />
            <div className="mt40">
              <p className="client-text-16">40$</p>
              <button>View Details</button>
            </div>
          </div>
        </div>
        <svg
          width="20"
          height="20"
          onClick={handleRight}
          className="right"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={rightArrow} fill="white" />
        </svg>
      </div>
    </div>
  );
}
