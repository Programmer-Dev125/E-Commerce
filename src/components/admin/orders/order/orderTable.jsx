export default function OrderTable() {
  return (
    <table className="order-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Buyer Name</th>
          <th>Price</th>
          <th>Date</th>
          <th>Pending</th>
          <th>Canceled</th>
          <th>Complete</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Smooth Fountain Pen</td>
          <td>John Doe</td>
          <td>20$</td>
          <td>Tuesday 20, 2025</td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <button className="del-btn">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
