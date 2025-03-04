export default function AddProduct() {
  return (
    <form className="product-form">
      <div className="mb30">
        <label htmlFor="name">Product Name</label>
        <input type="text" placeholder="product name" />
      </div>
      <div className="mb30">
        <label htmlFor="price">Product Price</label>
        <input type="text" placeholder="product price" />
      </div>
      <div className="mb30">
        <label className="file-label" htmlFor="file-img">
          Select Image
        </label>
        <input type="file" id="file-img" className="file-input" />
        <div className="img-preview-box mt20"></div>
      </div>
      <div>
        <button className="add-product-btn">Add Product</button>
      </div>
    </form>
  );
}
