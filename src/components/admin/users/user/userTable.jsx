import { useState } from "react";

export default function UserTable() {
  return (
    <section>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th colSpan={2}>Products</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>johndoe@gmail.com</td>
            <td>Tuesday 20, 2025</td>
            <td colSpan={2}>Smooth Fountain Pen, Elit Writer</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
