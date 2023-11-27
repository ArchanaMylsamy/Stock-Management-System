import React, { useState } from "react";
import "./Modal.css";

// ... (other imports and styles)

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
    const [formState, setFormState] = useState(
      defaultValue || {
        product: "",
        description: "", // Added description field
        trackingId: "",
        status: "Approved",
        date: "",
        price: "",
        quantity: "",
      }
    );
    const [errors, setErrors] = useState("");
  
    const validateForm = () => {
      if (
        formState.product &&
        formState.trackingId &&
        formState.description &&
        formState.status &&
        formState.date &&
        formState.price &&
        formState.quantity
      ) {
        setErrors("");
        return true;
      } else {
        let errorFields = [];
        for (const [key, value] of Object.entries(formState)) {
          if (!value) {
            errorFields.push(key);
          }
        }
        setErrors(errorFields.join(", "));
        return false;
      }
    };
  
    const handleChange = (e) => {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!validateForm()) return;
  
      onSubmit(formState);
  
      closeModal();
    };
  
    return (
      <div
        className="modal-container"
        onClick={(e) => {
          if (e.target.className === "modal-container") closeModal();
        }}
      >
        <div className="modal">
          <form>
            <div className="form-group">
              <label htmlFor="product">Product</label>
              <input
                name="product"
                type="text"
                onChange={handleChange}
                value={formState.product}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                onChange={handleChange}
                value={formState.description}
                rows="4" // Set the number of rows for a larger textbox
              />
            </div>
            <div className="form-group">
              <label htmlFor="trackingId">Tracking Id</label>
              <input
                name="trackingId"
                type="text"
                onChange={handleChange}
                value={formState.trackingId}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                name="date"
                type="date"
                onChange={handleChange}
                value={formState.date}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                name="price"
                type="number"
                onChange={handleChange}
                value={formState.price}
              />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input
                name="quantity"
                type="number"
                onChange={handleChange}
                value={formState.quantity}
              />
            </div>
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                name="status"
                onChange={handleChange}
                value={formState.status}
              >
                <option value="approved">Approved</option>
                <option value="delivered">Delivered</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            {errors && <div className="error">{`Please include: ${errors}`}</div>}
            <button type="submit" className="btn" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };
  
