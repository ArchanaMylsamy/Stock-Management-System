import { useState } from "react";
import "./Productpage.css";
import { Table } from "./components/Table";
import { Modal } from "./components/Modal";

function Productpage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      product: "Lazania Chicken Fri",
      description: "The most liked product by the user",
      trackingId: "123456789", // Example trackingId with 10 digits
      date: "2022-03-02",
      price: "Rs.20",
      quantity: 5,
      status: "Approved",
    },
    {
      product: "Big Baza Bang",
      description: "The cheapest and most soldable product",
      trackingId: "9876543210", // Example trackingId with 10 digits
      date: "2022-03-02",
      price: "Rs.15",
      quantity: 8,
      status: "Pending",
    },
    {
      product: "Mouth Freshner",
      description: "Prices for different brands",
      trackingId: "3456789012", // Example trackingId with 10 digits
      date: "2022-03-02",
      price: "Rs.30",
      quantity: 10,
      status: "Delivered",
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    setRows((prevRows) => {
      return rowToEdit === null
        ? [...prevRows, newRow]
        : prevRows.map((currRow, idx) => (idx !== rowToEdit ? currRow : newRow));
    });

    setRowToEdit(null);
    setModalOpen(false);
  };

  return (
    <div className="AppProduct">
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button onClick={() => setModalOpen(true)} className="addbtn">
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null ? rows[rowToEdit] : null}
        />
      )}
    </div>
  );
}

export default Productpage;
