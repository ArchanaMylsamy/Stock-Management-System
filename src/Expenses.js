import React, { useState } from 'react';
import "./Expenses.css";

const Expenses = () => {
  const [userAmount, setUserAmount] = useState('');
  const [productTitle, setProductTitle] = useState('');
  const [productTitleError, setProductTitleError] = useState(false);
  const [expenditureValue, setExpenditureValue] = useState(0);
  const [listItems, setListItems] = useState([]);

  const disableButtons = (bool) => {
    setListItems((prevListItems) =>
      prevListItems.map(item => ({ ...item, disabled: bool }))
    );
  };

  const modifyElement = (item, edit = false) => {
    const currentExpense = expenditureValue;
    const parentAmount = item.expenseValue;
  
    if (edit) {
      const parentText = item.expenseName;
      setProductTitle(parentText);
      setUserAmount(parentAmount);
      disableButtons(true);
    }
  
    setExpenditureValue((prevExpenditure) => prevExpenditure - parentAmount);
  
    // Remove the element from the list
    setListItems((prevListItems) =>
      prevListItems.filter((prevItem) => prevItem !== item)
    );
  };
  

  const listCreator = (expenseName, expenseValue) => {
    const newItem = {
      expenseName,
      expenseValue,
    };

    setListItems((prevListItems) => [...prevListItems, newItem]);
  };

  const addExpenses = () => {
    if (!userAmount || !productTitle) {
      setProductTitleError(true);
      return;
    }

    disableButtons(false);

    const expenditure = parseInt(userAmount);
    const sum = expenditureValue + expenditure;
    setExpenditureValue(sum);

    // Create list
    listCreator(productTitle, expenditure);

    // Empty inputs
    setProductTitle('');
    setUserAmount('');
    setProductTitleError(false);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="sub-container">
          <div className="user-amount-container">
            <h3>Enter Expenses</h3>
            <p className={`hide error ${productTitleError ? '' : 'hide'}`} id="product-title-error">
              Values cannot be empty
            </p>
            <input
              type="text"
              className="product-title"
              id="product-title"
              placeholder="Enter Title of Product"
              value={productTitle}
              onChange={(e) => setProductTitle(e.target.value)}
            />
            <input
              type="number"
              id="user-amount"
              placeholder="Enter Cost of Product"
              value={userAmount}
              onChange={(e) => setUserAmount(e.target.value)}
            />
            <button className="submit" id="add-expenses" onClick={addExpenses}>
              Add
            </button>
          </div>
        </div>

        <div className="output-container flex-space">
          <div className="totalExpenses">
            <p>Total Expenses For Today</p>
            <span id="expenditure-value">{expenditureValue}</span>
          </div>
        </div>
      </div>

      <div className="list">
        <h3>Expenses</h3>
        <div className="list-container" id="list">
          {listItems.map((item, index) => (
            <div key={index} className="sublist-content flex-space">
              <p className="product">{item.expenseName}</p>
              <p className="amount">Rs.{item.expenseValue}</p>
              <button
                className="fa-solid fa-pen-to-square edit"
                style={{ fontSize: "1.2em" }}
                onClick={() => modifyElement(item, true)}
              >
                Edit
              </button>
              <button
                className="fa-solid fa-trash-can delete"
                style={{ fontSize: "1.2em" }}
                onClick={() => modifyElement(item)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
