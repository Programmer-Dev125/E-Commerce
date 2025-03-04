export default function RecentBuyers() {
  return (
    <div>
      <div className="flex-box-row sp-between align-center  mb50">
        <p>Recent Buyers</p>
        <div className="w15 text-end">
          <button className="w100">View All Buyers</button>
        </div>
      </div>
      <table className="card seller-table mt60 w100">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Payment Processor</th>
            <th>Date</th>
            <th>Money Spent</th>
            <th colSpan={2}>Product Bought</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>johndoe@gmail.com</td>
            <td>Stripe</td>
            <td>Tuesday 20, 2025</td>
            <td>100$</td>
            <td colSpan={2}>Smooth Fountain Pen, Premium Pen, Elite Writer</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>johndoe@gmail.com</td>
            <td>Stripe</td>
            <td>Tuesday 20, 2025</td>
            <td>100$</td>
            <td colSpan={2}>Smooth Fountain Pen, Premium Pen, Elite Writer</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>johndoe@gmail.com</td>
            <td>Stripe</td>
            <td>Tuesday 20, 2025</td>
            <td>100$</td>
            <td colSpan={2}>Smooth Fountain Pen, Premium Pen, Elite Writer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
