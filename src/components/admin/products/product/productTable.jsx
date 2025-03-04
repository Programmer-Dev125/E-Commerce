export default function ProductTable() {
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Date</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Smooth Fountain Pen</td>
          <td>30</td>
          <td>30$</td>
          <td>Tuesday 18, 2025</td>
          <td>
            <button className="del-btn">Delete</button>
          </td>
          <td>
            <button className="edit-btn">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
