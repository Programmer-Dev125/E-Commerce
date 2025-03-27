import { useRef, useState } from "react";

export default function AddProduct() {
  const formRef = useRef(null);
  const [contents, setContents] = useState({
    productName: "",
    productPrice: "",
  });
  const [img, setImg] = useState(null);

  async function handleProduct(e) {
    e.preventDefault();
    const isFetch = await fetch(
      "https://e-commerce-gamma-one-65.vercel.app/api/app",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-request-path": "/addProduct",
        },
        body: JSON.stringify({
          ...contents,
          img: Array.from(new Uint8Array(img)),
        }),
      }
    );
    const isResp = await isFetch.json();
    console.log(isResp);
  }

  function handleChange(e) {
    setContents({
      ...contents,
      [e.target.id]: e.target.value,
    });
  }

  async function handleImageChange(e) {
    const isImg = formRef.current.querySelector("img");
    const isFile = e.target.files[0];
    const url = URL.createObjectURL(isFile);
    isImg.src = url;
    const arrBuff = await isFile.arrayBuffer();
    setImg(arrBuff);
  }

  return (
    <div className="addProduct-card">
      <h2 className="mt10 mb40 page-title wfit">Add Product</h2>
      <form ref={formRef} autoComplete="off" onSubmit={handleProduct}>
        <>
          <label
            htmlFor="productName"
            className="isBlock client-text mt25 mb10"
          >
            Product Name
          </label>
          <input
            type="text"
            name="productName"
            id="productName"
            value={contents.productName}
            onChange={handleChange}
            required
          />
        </>
        <>
          <label
            htmlFor="productPrice"
            className="isBlock client-text mt25 mb10"
          >
            Product Price
          </label>
          <input
            type="text"
            name="productPrice"
            id="productPrice"
            value={contents.productPrice}
            onChange={handleChange}
            required
          />
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
