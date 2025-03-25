import { useRef } from "react";

export default function AddProduct() {
  const formRef = useRef(null);

  async function handleProduct(e) {
    e.preventDefault();
    const fData = new FormData(formRef.current);
    const isFetch = await fetch("http://localhost:3000/addProduct", {
      method: "POST",
      body: fData,
      credentials: "include",
    });
    if (isFetch.status === 200) {
      const isResp = await isFetch.json();
      console.log(isResp);
    }
  }

  function handleImageChange(e) {
    const isImg = formRef.current.querySelector("img");
    const isFile = e.target.files[0];
    isImg.src = URL.createObjectURL(isFile);
  }

  return (
    <div className="addProduct-card">
      <h2 className="mt10 mb40 page-title wfit">Add Product</h2>
      <form
        ref={formRef}
        autoComplete="off"
        encType="multipart/form-data"
        onSubmit={handleProduct}
      >
        <>
          <label
            htmlFor="productName"
            className="isBlock client-text mt25 mb10"
          >
            Product Name
          </label>
          <input type="text" name="productName" id="productName" />
        </>
        <>
          <label
            htmlFor="productPrice"
            className="isBlock client-text mt25 mb10"
          >
            Product Price
          </label>
          <input type="text" name="productPrice" id="productPrice" />
        </>
        <>
          <label
            htmlFor="productFile"
            className="isBlock client-text mt25 mb40 file-label"
          >
            Add File
          </label>
          <input
            type="file"
            name="productFile"
            id="productFile"
            accept="image/*"
            onChange={handleImageChange}
          />
        </>
        <>
          <img />
        </>
        <>
          <button className="mb20">Submit</button>
        </>
      </form>
    </div>
  );
}
